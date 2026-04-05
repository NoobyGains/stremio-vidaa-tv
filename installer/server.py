#!/usr/bin/env python3
"""
Stremio VIDAA Installer Server
===============================
Zero-dependency Python server that:
  1. Spoofs DNS so vidaahub.com resolves to this machine
  2. Serves the installer page over HTTPS on port 443
  3. Auto-generates a self-signed SSL certificate

Usage:  python server.py
Requires: Python 3.6+, OpenSSL CLI (for cert generation)
Run as admin/root (ports 53 and 443 are privileged).
"""

import http.server
import ssl
import socket
import struct
import threading
import subprocess
import tempfile
import os
import sys
import signal

# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------

SPOOF_DOMAIN = "vidaahub.com"
DNS_PORT = 53
HTTPS_PORT = 443
INSTALLER_DIR = os.path.dirname(os.path.abspath(__file__))

# ---------------------------------------------------------------------------
# Utility: detect local IP
# ---------------------------------------------------------------------------

def get_local_ip():
    """Return the LAN IP address of this machine."""
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except Exception:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip

# ---------------------------------------------------------------------------
# SSL certificate generation
# ---------------------------------------------------------------------------

def generate_self_signed_cert(cert_path, key_path):
    """Generate a self-signed certificate for vidaahub.com using OpenSSL CLI."""
    cmd = [
        "openssl", "req", "-x509", "-newkey", "rsa:2048",
        "-keyout", key_path,
        "-out", cert_path,
        "-days", "30",
        "-nodes",
        "-subj", "/CN=" + SPOOF_DOMAIN,
        "-addext", "subjectAltName=DNS:" + SPOOF_DOMAIN + ",DNS:*." + SPOOF_DOMAIN,
    ]
    try:
        subprocess.run(cmd, check=True, capture_output=True)
    except FileNotFoundError:
        print("ERROR: OpenSSL CLI not found. Please install OpenSSL and ensure")
        print("       it is on your PATH, then try again.")
        sys.exit(1)
    except subprocess.CalledProcessError as e:
        # Older OpenSSL may not support -addext; retry without it
        cmd_fallback = [
            "openssl", "req", "-x509", "-newkey", "rsa:2048",
            "-keyout", key_path,
            "-out", cert_path,
            "-days", "30",
            "-nodes",
            "-subj", "/CN=" + SPOOF_DOMAIN,
        ]
        subprocess.run(cmd_fallback, check=True, capture_output=True)

# ---------------------------------------------------------------------------
# DNS server (UDP, port 53)
# ---------------------------------------------------------------------------

def build_dns_response(data, spoof_ip):
    """Build a minimal DNS response spoofing all A-record queries to spoof_ip."""
    if len(data) < 12:
        return None

    # Transaction ID
    tid = data[:2]

    # Flags: standard response, recursion available, no error
    flags = b"\x81\x80"

    # Question count (echo back), Answer count = question count
    qd_count = struct.unpack("!H", data[4:6])[0]
    an_count = qd_count
    counts = struct.pack("!HH", qd_count, an_count) + b"\x00\x00\x00\x00"

    # Copy the question section
    offset = 12
    for _ in range(qd_count):
        while offset < len(data):
            length = data[offset]
            if length == 0:
                offset += 1
                break
            offset += 1 + length
        offset += 4  # QTYPE + QCLASS

    question = data[12:offset]

    # Build answer section: one A record per question
    ip_bytes = socket.inet_aton(spoof_ip)
    answers = b""
    q_offset = 12
    for _ in range(qd_count):
        # Pointer to the name in the question section
        name_start = q_offset
        while q_offset < len(data):
            length = data[q_offset]
            if length == 0:
                q_offset += 1
                break
            q_offset += 1 + length
        q_offset += 4  # skip QTYPE + QCLASS

        answers += struct.pack("!H", 0xC000 | name_start)  # name pointer
        answers += struct.pack("!HHI", 1, 1, 60)            # TYPE A, CLASS IN, TTL 60
        answers += struct.pack("!H", 4) + ip_bytes           # RDLENGTH + IP

    return tid + flags + counts + question + answers


def dns_server(local_ip):
    """Run a UDP DNS server that spoofs SPOOF_DOMAIN to local_ip."""
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    try:
        sock.bind(("0.0.0.0", DNS_PORT))
    except PermissionError:
        print("ERROR: Cannot bind to port 53. Run this script as Administrator / root.")
        sys.exit(1)
    except OSError as e:
        print("ERROR: Cannot bind to port 53 (" + str(e) + ").")
        print("       Make sure no other DNS service is running and try again.")
        sys.exit(1)

    print("[DNS]   Listening on port " + str(DNS_PORT))

    while True:
        try:
            data, addr = sock.recvfrom(512)
            response = build_dns_response(data, local_ip)
            if response:
                sock.sendto(response, addr)
                # Extract queried domain for logging
                try:
                    labels = []
                    i = 12
                    while i < len(data):
                        length = data[i]
                        if length == 0:
                            break
                        labels.append(data[i + 1:i + 1 + length].decode("ascii", errors="replace"))
                        i += 1 + length
                    domain = ".".join(labels)
                    print("[DNS]   " + addr[0] + " queried " + domain + " -> " + local_ip)
                except Exception:
                    pass
        except Exception:
            pass

# ---------------------------------------------------------------------------
# HTTPS server (port 443)
# ---------------------------------------------------------------------------

class InstallerHandler(http.server.SimpleHTTPRequestHandler):
    """Serves files from the installer directory."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=INSTALLER_DIR, **kwargs)

    def log_message(self, format, *args):
        print("[HTTPS] " + self.client_address[0] + " " + (format % args))

    def end_headers(self):
        # Prevent caching
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        super().end_headers()


def https_server(cert_path, key_path):
    """Run an HTTPS server on port 443."""
    server = http.server.HTTPServer(("0.0.0.0", HTTPS_PORT), InstallerHandler)

    ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
    ctx.load_cert_chain(cert_path, key_path)
    server.socket = ctx.wrap_socket(server.socket, server_side=True)

    print("[HTTPS] Listening on port " + str(HTTPS_PORT))
    server.serve_forever()

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    local_ip = get_local_ip()

    print("")
    print("Stremio VIDAA Installer")
    print("=" * 40)
    print("Local IP: " + local_ip)
    print("")
    print("Step 1: On your TV, go to Settings > Network > DNS")
    print("Step 2: Set DNS to: " + local_ip)
    print("Step 3: Open the TV browser and go to: https://" + SPOOF_DOMAIN)
    print("Step 4: Click \"Install Stremio\"")
    print("Step 5: Revert DNS to automatic and restart TV")
    print("")

    # Generate SSL cert in a temp directory
    tmp = tempfile.mkdtemp(prefix="stremio_installer_")
    cert_path = os.path.join(tmp, "cert.pem")
    key_path = os.path.join(tmp, "key.pem")

    print("[INIT]  Generating self-signed SSL certificate...")
    generate_self_signed_cert(cert_path, key_path)
    print("[INIT]  Certificate ready")
    print("")

    # Start DNS server in a background thread
    dns_thread = threading.Thread(target=dns_server, args=(local_ip,), daemon=True)
    dns_thread.start()

    # Start HTTPS server in a background thread
    https_thread = threading.Thread(target=https_server, args=(cert_path, key_path), daemon=True)
    https_thread.start()

    print("")
    print("Waiting for TV connection... (Ctrl+C to stop)")
    print("")

    # Keep main thread alive
    try:
        signal.pause()
    except AttributeError:
        # signal.pause() not available on Windows
        try:
            while True:
                threading.Event().wait(1)
        except KeyboardInterrupt:
            pass
    except KeyboardInterrupt:
        pass

    print("\nShutting down.")


if __name__ == "__main__":
    main()

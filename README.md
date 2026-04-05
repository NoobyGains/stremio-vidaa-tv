<p align="center">
  <img src="logo.png" alt="Stremio" width="120" />
</p>

<h1 align="center">Stremio for VIDAA TV</h1>

<p align="center">
  The classic Stremio Theater v1.9.2 frontend — rebuilt with the latest <strong>v5 WASM core</strong> — hand&#8209;woven together and fully tested on Hisense VIDAA OS.
</p>

<p align="center">
  <a href="https://noobygains.github.io/stremio-vidaa-tv/"><img src="https://img.shields.io/website?label=GitHub%20Pages&logo=github&up_message=online&down_message=offline&url=https%3A%2F%2Fnoobygains.github.io%2Fstremio-vidaa-tv%2F" alt="Pages status" /></a>
  <img src="https://img.shields.io/badge/frontend-Theater%20v1.9.2-blue" alt="Frontend version" />
  <img src="https://img.shields.io/badge/core-stremio--core--web%20v5%20(0.55.0)-purple" alt="Core version" />
  <img src="https://img.shields.io/badge/build-v7-orange" alt="Build version" />
  <img src="https://img.shields.io/badge/platform-VIDAA%20OS-green" alt="Platform" />
  <a href="https://github.com/NoobyGains/stremio-vidaa-tv/stargazers"><img src="https://img.shields.io/github/stars/NoobyGains/stremio-vidaa-tv?style=social" alt="GitHub Stars" /></a>
</p>

---

## What is this?

Stremio dropped official support for the **Theater (TV) frontend** but the newer **v5 WASM core** kept getting updates. This project takes the last working TV-optimised frontend (v1.9.2) and grafts the latest stremio-core-web v5 engine onto it — giving VIDAA TVs a native-feeling Stremio experience with a modern backend.

Every chunk was hand-merged: the original 58 UI/translation/route chunks are preserved while the core Worker, WASM binary and service bridge were rebuilt from the v5 release.

## Fixes & Improvements

| Area | What was broken | What this build does |
|---|---|---|
| **Search** | VIDAA system keyboard sets `input.value` without firing DOM events — search never triggered | 3-layer fix: value-setter intercept, 250 ms polling fallback, direct URL-hash update as nuclear option |
| **Playback** | Streams marked `notWebReady` were rejected outright — "Video not supported" on most content | Removed the gate so the browser attempts direct playback; unsupported codecs fall through to transcoding via your streaming server |
| **Transcoding** | `canPlayStream` was force-true, bypassing the streaming server entirely — HEVC/4K just failed | Restored proper transcoding path so unsupported codecs get transcoded to H.264 HLS |
| **Channels tab** | Pointed to `/discover/channel` but live TV addons use type `tv` | Fixed route to `/discover/tv` |
| **Heartbeat loop** | Hard-coded VPS URL caused mixed-content errors on HTTPS; infinite restart loop on failure | Rewired to `127.0.0.1:11470` with max-retry cap and exponential backoff |
| **Subtitle tracks** | Fetch had no timeout — hung indefinitely on unreachable server | Added 10 s `AbortController` timeout |
| **Video reload** | Stream comparison was a no-op (`stream !== stream` — always false) | Saves previous stream URL, skips reload on duplicate load events |
| **Worker errors** | Unhandled Worker crashes silently broke the core | Added try/catch + `onerror` handler |
| **720p zoom** | Hisense projectors report 720p viewport, UI was clipped | Auto-detects VIDAA + 720p and applies 65% zoom correction |
| **Caching** | GitHub Pages served stale JS forever | Cache-busting query strings (`?v=5`) on all scripts + no-cache meta tags |
| **Offline load** | Every visit re-downloaded ~1 MB of JS + WASM from GitHub Pages | Service Worker caches the entire app shell after first load |
| **Server URL** | Streaming server address was hard-coded — required a rebuild to change | Configurable via `?server=` query parameter |
| **DV Profile 7** | Dolby Vision Profile 7 streams showed a black screen with no error | Detects DV P7 codec from probe metadata, shows warning overlay, offers transcode-to-H.264 or fallback to next source |
| **Server URL** | `?server=` only affected heartbeat, not actual stream routing | URL now syncs directly to the WASM core on startup and auto-reloads when changed in Settings |
| **Error messages** | Generic "video not supported" for all codec failures | Codec-specific, actionable messages that tell the user what to do |

## Installation

### Method 1: One-Click Installer (recommended)

The easiest way to install. Requires a PC on the same network as your TV.

1. Download and run the installer:
   ```bash
   git clone https://github.com/NoobyGains/stremio-vidaa-tv.git
   cd stremio-vidaa-tv/installer
   python server.py
   ```
2. On your **TV**: go to Settings > Network > DNS and set it to the IP shown by the script
3. On your **TV**: open the **Internet Browser** (Home > Apps > look for "Browser" or the globe icon, check "All Apps" if you don't see it) and go to `https://vidaahub.com`
4. Press **Install Stremio**
5. Revert DNS to automatic and restart your TV
6. Stremio appears in your app launcher permanently

The installer also registers GitHub Pages as a trusted domain, so future updates work automatically.

### Method 2: Direct URL (if already sideloaded)

If you've previously sideloaded any app via DNS spoofing:

1. On your TV, press the **Home** button on the remote
2. Navigate to the **VIDAA App Store** or **Apps** row
3. Find and open the **Internet Browser** (it may be labelled "Browser" or have a globe icon — if you don't see it, check "All Apps" or search for "Browser")
4. In the address bar, type:
   ```
   https://noobygains.github.io/stremio-vidaa-tv/
   ```
5. The app loads and will prompt you to "Install to Launcher" on first run

### Method 3: Self-hosted with Docker

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000"]
```

```bash
git clone https://github.com/NoobyGains/stremio-vidaa-tv.git
cd stremio-vidaa-tv
docker-compose up -d
```

Then set `appUrl` in the sideload script to `http://<your-ip>:8000`.

## Custom Streaming Server

By default the app talks to `127.0.0.1:11470` (localhost). To point it at a remote streaming server, add a `?server=` query parameter:

```
https://noobygains.github.io/stremio-vidaa-tv/?server=http://192.168.1.50:11470
```

The setting is saved to `localStorage` — you only need to pass it once.

## What's New in v7

| Feature | Description |
|---|---|
| **Server URL fix** | `?server=` now properly syncs to the WASM core — streams actually route through your configured server |
| **Auto-reload** | Changing the server URL in Settings automatically reloads the connection — no manual reload needed |
| **DV Profile 7 detection** | Dolby Vision Profile 7 streams are detected before playback with a warning overlay and transcode option |
| **Better error messages** | Codec-specific, actionable error messages instead of generic "video not supported" |
| **Resolution indicator** | Shows current playback resolution (4K/1080p/720p/etc.) in the player |
| **Splash screen** | Stremio-branded loading screen while WASM initialises |
| **Remote shortcuts** | VIDAA color buttons mapped: Red=quality, Green=server health, Blue=force transcode, Info=stream details |
| **Server health** | Real-time server status with latency monitoring |
| **Watchdog** | Auto-recovers from UI freezes (>15s) |
| **Memory monitor** | Warns on high memory usage to prevent TV browser crashes |

## Remote Control Shortcuts

| Button | Action |
|---|---|
| **Red** | Toggle resolution indicator |
| **Green** | Show/hide server health overlay |
| **Blue** | Force transcode current stream (useful for unsupported codecs) |
| **Info / Display** | Show detailed stream info (resolution, buffer, duration, DV status) |

## Troubleshooting

| Problem | Solution |
|---|---|
| **"Install" button does nothing on vidaahub.com** | Enable Developer Mode: TV Settings → System → About → press **1234** on the remote → toggle Developer Mode on. Ensure the sideload server script is running on a PC on the same network. |
| **"Server Offline" in Settings** | Your streaming server must be running on a device on the same network. Test by visiting `http://<server-ip>:11470/heartbeat` in a browser. Use `?server=http://<ip>:11470` to configure. |
| **Black screen during playback** | Likely a Dolby Vision Profile 7 or unsupported HEVC stream. v7 now detects this and shows a warning. Configure a streaming server for automatic transcoding. |
| **Playback stops after ~2 minutes** | Usually a heartbeat/server connection issue. Make sure your streaming server is reachable and the URL is correctly configured. v7 fixes the auto-reload after URL changes. |
| **Search keyboard not working** | Ensure you're on v7+ (check the version number in the bottom-right corner). The VIDAA keyboard fix is built in. |
| **App shows old version after update** | The service worker may be serving a cached copy. Go to Settings → Clear Data, or add `?v=new` to the URL to force a refresh. |
| **720p UI is clipped or too large** | The app auto-detects 720p VIDAA devices and applies a 65% zoom correction. If this isn't working, your TV may not be reporting the viewport correctly. |

## Under the Hood

This build is backed by deep reverse engineering of the VIDAA OS browser environment. Through live hardware scanning, we've mapped the full codec pipeline, HDR/Dolby Vision capabilities, and native API surface of VIDAA devices — enabling features no other VIDAA Stremio build offers:

- **Real hardware codec detection** — the app knows exactly what your TV can and can't play, and acts accordingly
- **Dolby Vision awareness** — DV Profile 7 streams are detected and handled intelligently instead of failing silently
- **Native VIDAA integration** — trusted domain registration, app launcher installation, real-time video state observers
- **One-click installation** — no complex sideloading scripts, just run the installer and press a button

## How It Works

```
┌──────────────────────────────────────────┐
│  Stremio Theater v1.9.2 Frontend (UI)    │
│  58 original chunks: home, discover,     │
│  search, player, settings, library,      │
│  addons, login, details, video, etc.     │
├──────────────────────────────────────────┤
│  v7 Patch Layer (index.html)             │
│  Server sync, DV detection, VIDAA API    │
│  integration, install-to-launcher, QoL   │
├──────────────────────────────────────────┤
│  v5 Core Bridge (core.chunk.js)          │
│  External Worker loader → v5-worker.js   │
├──────────────────────────────────────────┤
│  stremio-core-web v5 WASM (0.55.0)      │
│  stremio_core_web_bg.wasm                │
├──────────────────────────────────────────┤
│  Service Worker (sw.js)                  │
│  Caches app shell for instant TV boot    │
├──────────────────────────────────────────┤
│  One-Click Installer (installer/)        │
│  DNS spoof + HTTPS server + auto-install │
└──────────────────────────────────────────┘
```

## Requirements

- **Hisense / Toshiba TV** running **VIDAA OS** (required)
- A **Stremio account** at [stremio.com](https://www.stremio.com/) (required, free)
- **Real-Debrid** or similar debrid service (recommended for best streaming experience)
- A Stremio streaming server (optional, only needed for transcoding HEVC/4K/DV content without debrid)

> Most users with Real-Debrid do not need a streaming server. The v5 WASM core handles everything in-browser.

## Credits

- [Stremio](https://github.com/Stremio) — original Stremio web app, core, and sideload tooling
- [weinzii/vidaa-edge](https://github.com/weinzii/vidaa-edge) — VIDAA development toolkit used for API reverse engineering
- [Stremio/stremio-hisense-install](https://github.com/Stremio/stremio-hisense-install) — original sideload script

## Community

- [r/Stremio](https://www.reddit.com/r/Stremio/) — Stremio community
- [r/Hisense](https://www.reddit.com/r/Hisense/) — Hisense TV community

## Support

If this project helped you get Stremio working on your TV, consider starring the repo or buying me a coffee.

<a href="https://buymeacoffee.com/noobygains"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="200" /></a>

## Disclaimer

This is an unofficial, community-maintained build for educational and self-hosting purposes only. All Stremio trademarks belong to Smart Code OOD. This project is not affiliated with or endorsed by Stremio.

## License

The original Stremio code is licensed under [GPLv2](https://github.com/user-attachments/files/19851539/LICENSE.md). Modifications in this repository follow the same license.

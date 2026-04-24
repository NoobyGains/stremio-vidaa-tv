<p align="center">
  <img src="logo.png" alt="Stremio" width="120" />
</p>

<h1 align="center">Stremio for Hisense Projectors &amp; VIDAA TVs</h1>

<p align="center">
  Built because the official <strong>Stremio Lite</strong> on Hisense projectors is broken and feature-limited. A full Stremio experience that actually works on PX3-Pro, M2 Pro, C2, C2 Mini, and any VIDAA TV.
</p>

<p align="center">
  <a href="https://noobygains.github.io/stremio-vidaa-tv/"><img src="https://img.shields.io/website?label=GitHub%20Pages&logo=github&up_message=online&down_message=offline&url=https%3A%2F%2Fnoobygains.github.io%2Fstremio-vidaa-tv%2F" alt="Pages status" /></a>
  <img src="https://img.shields.io/badge/build-v7-orange" alt="Build version" />
  <img src="https://img.shields.io/badge/core-stremio--core--web%20v5%20(0.55.0)-purple" alt="Core version" />
  <img src="https://img.shields.io/badge/platform-VIDAA%20OS-green" alt="Platform" />
  <a href="https://github.com/NoobyGains/stremio-vidaa-tv/stargazers"><img src="https://img.shields.io/github/stars/NoobyGains/stremio-vidaa-tv?style=social" alt="GitHub Stars" /></a>
</p>

---

## Why this exists

If you own a **Hisense Laser projector** (PX3-Pro, PX1-Pro, PX1HE, M2 Pro, Smart Mini C2, Smart Mini C2 Pro, C2 Ultra), you already know the story:

- The official **Stremio Lite** in the VIDAA app store buffers forever after 30–40 seconds, crashes on updates, and has no community addons, no transcoding, and no streaming server support.
- Hisense has effectively abandoned Stremio on these devices. The native app store barely updates for projectors.
- Most "install Stremio on Hisense" guides only cover retail TVs and silently fail on projectors because the projector firmware has **extra install restrictions** retail TVs don't.

This project was originally built to get Stremio working on a **Hisense PX3-Pro Ultra Short Throw Triple Laser 4K Projector**. It grew because users of other projectors and VIDAA TVs asked for help, so everything is designed to work on both.

## What you get

- **Full Stremio**, not Lite — community addons (Torrentio, etc.), streaming server support, transcoding, external debrid services all work.
- **Modern stremio-core v5 WASM engine** grafted onto the original Stremio Theater v1.9.2 TV frontend (built for D-pad navigation and 10-foot viewing distance — perfect for projectors).
- **Projector-first defaults** — no full-screen error overlays blocking your remote, large UI sizing, Method 2 (bookmark) as the reliable install path.
- **Every custom feature is a toggle** in Settings &gt; STREMIO TV so you can turn anything on or off per device.
- **Reverse-engineered VIDAA integration** for native player handoff, hardware codec detection, trusted-domain registration, and launcher installation.

## Requirements

- A **Hisense projector** running VIDAA OS, OR a **Hisense / Toshiba / Sharp / AKAI TV** running VIDAA OS.
- A **Stremio account** ([stremio.com](https://www.stremio.com/), free).
- **Real-Debrid** or similar debrid service (recommended — makes most streams play natively with no streaming server needed).

No streaming server required for most users. With Real-Debrid + Torrentio, streams are direct H.264/HEVC links your TV/projector plays natively.

## Installation

**Projector owners: use Method 1 (bookmark). It works everywhere and takes 30 seconds.** The installer (Method 2) only adds a permanent launcher icon on certain retail TVs — on projectors and most newer firmware, the install API silently refuses even when it reports success. The bookmark version is identical, just launched from the TV Browser instead of the launcher.

### Method 1: Bookmark in the TV Browser (works on everything)

1. On your TV/projector, open the **Internet Browser** (Home &gt; Apps &gt; "Browser" or the globe icon — check **All Apps** if you don't see it, some firmware hides it by default).
2. Go to:
   ```
   https://noobygains.github.io/stremio-vidaa-tv/
   ```
3. Bookmark the page. Open it from the bookmark any time you want to use Stremio.

That's it. The app caches itself via a Service Worker so it launches instantly after the first load.

### Method 2: One-Click Installer (retail TVs only — not reliable on projectors)

Adds a permanent launcher icon. Requires a PC on the same network. Only works on some retail TVs; on projectors and newer VIDAA builds the firmware accepts the install call but never actually adds the icon, so just use Method 1 there.

1. Download and run the installer:
   ```bash
   git clone https://github.com/NoobyGains/stremio-vidaa-tv.git
   cd stremio-vidaa-tv/installer
   python server.py
   ```
2. On your **TV**: go to **Settings &gt; Network &gt; DNS** and set it to the IP shown by the script.
3. On your **TV**: open the **Internet Browser** and go to `https://vidaahub.com`.
4. Press **Install Stremio**.
5. Revert DNS to automatic and fully restart your TV (unplug for 10 seconds if needed).
6. If Stremio appears in the launcher — great. If not, your firmware blocks launcher installation; fall back to Method 1.

The installer only spoofs `vidaahub.com`, forwards normal DNS requests upstream, and serves the install UI/icons locally to avoid GitHub Pages lookups during installation.

### Method 3: Self-hosted

```bash
git clone https://github.com/NoobyGains/stremio-vidaa-tv.git
cd stremio-vidaa-tv
docker build -t stremio-vidaa .
docker run -d -p 8000:8000 stremio-vidaa
```

Then open `http://<your-pc-ip>:8000` on your TV.

## Streaming Server (optional)

**Most users don't need this.** With Real-Debrid, your TV plays streams directly. No server required.

You only need a streaming server if you:
- Stream raw torrents without a debrid service
- Play AV1 content (not supported on VIDAA hardware)
- Want automatic transcoding for codecs your TV can't handle

A streaming server is a separate program that runs on your network (PC, NAS, Raspberry Pi) and converts unsupported video formats to H.264 on the fly.

**Setup:**

```bash
docker run -d --name stremio-server -p 11470:11470 stremio/server
```

Or install [Stremio desktop](https://www.stremio.com/downloads) on a PC, which includes the server automatically.

**Connect it to the app** by adding `?server=` to the URL once:

```
https://noobygains.github.io/stremio-vidaa-tv/?server=http://192.168.1.50:11470
```

Replace `192.168.1.50` with your server's IP. The setting is saved automatically. You can also change it inside the app at **Settings > Server > Edit URL**.

## Tested Codec Support (Hisense PX1HE / 100L5H)

Tested via live hardware scanning and real stream playback:

| Format | Status | Notes |
|---|---|---|
| H.264 (all profiles, up to 4K) | Plays | Native browser decode |
| HEVC/H.265 (Main, Main10, 4K) | Plays | Native browser decode |
| HEVC 10-bit | Plays | Tested with real content |
| Dolby Vision + HDR (MKV) | Plays | Tested at 4K. Native decode, no transcoding needed |
| Dolby Vision + HDR + Atmos (MKV) | Plays | Full DV with Atmos audio works |
| Dolby Vision (MP4 container) | Does not play | Browser crashes or hangs. Use MKV sources |
| VP8 / VP9 | Plays | Native browser decode |
| AV1 | Not supported | Requires streaming server for transcoding |
| Content above 4K (4320p, 8K) | Black screen | Exceeds hardware decode limit |
| AAC, AC-3, EAC-3, Opus, FLAC | Plays | All common audio formats supported |

DRM: Widevine, PlayReady, and ClearKey are all supported.

> Other VIDAA TV models may have different codec support. These results are from a PX1HE running VIDAA U06.29 with a MediaTek MT9900 chipset.

## Features

| Feature | Description |
|---|---|
| **Full addon support** | All community addons work, including Torrentio with Real-Debrid |
| **Dolby Vision playback** | DV+HDR streams in MKV play natively at 4K. Smart stall detection warns only on actual failure |
| **Server URL sync** | `?server=` properly syncs to the WASM core. Auto-reloads when changed in Settings |
| **VIDAA keyboard fix** | 3-layer fix for the VIDAA on-screen keyboard not triggering search |
| **Resolution indicator** | Shows current playback quality (4K/1080p/720p) in the player |
| **Splash screen** | Loading screen with progress bar while WASM initialises |
| **Error messages** | Codec-specific, actionable messages instead of generic "video not supported" |
| **One-click install** | Permanent launcher icon via the included installer |
| **Service Worker** | Caches the entire app for instant boot after first load |
| **720p zoom fix** | Auto-corrects viewport scaling on projectors and 720p-reporting TVs |
| **Watchdog** | Auto-recovers from UI freezes |

## Beyond Stremio Core

This build includes fixes and features that go above and beyond what standard stremio-core provides. These are all implemented as self-contained patches in the `index.html` patch layer.

### Crash & Stability Fixes

| Fix | Description |
|---|---|
| **Suppress F key crash** ([#10](https://github.com/NoobyGains/stremio-vidaa-tv/issues/10)) | Prevents the VIDAA browser from crashing when the F key (fullscreen) is pressed. Fullscreen is meaningless on a TV — the browser is always fullscreen. |
| **Exit button for TV** ([#6](https://github.com/NoobyGains/stremio-vidaa-tv/issues/6)) | Adds an "Exit Stremio" button to Settings. Wired to `Hisense_Exit()` on VIDAA devices for a clean app exit. |

### Playback Persistence

| Fix | Description |
|---|---|
| **Save playback speed & volume** ([#9](https://github.com/NoobyGains/stremio-vidaa-tv/issues/9)) | Remembers your preferred playback speed and volume across sessions via localStorage. Automatically restored on each video. |
| **Fix subtitle size on start** ([#8](https://github.com/NoobyGains/stremio-vidaa-tv/issues/8)) | Persists subtitle size preference and force-applies it when the player initialises, preventing the core from resetting it. |
| **Remember subtitle language** ([#7](https://github.com/NoobyGains/stremio-vidaa-tv/issues/7)) | Stores your selected subtitle language and auto-selects a matching track when a new video starts. Supports partial language matching (e.g. "en" matches "eng"). |

### Subtitle Enhancements

| Fix | Description |
|---|---|
| **Subtitle off/unload option** ([#11](https://github.com/NoobyGains/stremio-vidaa-tv/issues/11)) | Injects a "None/Off" option into the subtitle picker so you can disable subtitles entirely. Standard Stremio has no way to turn subtitles off once enabled. |
| **Full subtitle filenames** ([#14](https://github.com/NoobyGains/stremio-vidaa-tv/issues/14)) | Intercepts addon subtitle responses and caches full filenames. Patches the subtitle picker DOM to show descriptive names instead of truncated labels. |

### Native Player Integration

| Fix | Description |
|---|---|
| **Full title to native player** ([#12](https://github.com/NoobyGains/stremio-vidaa-tv/issues/12)) | Scrapes the title from the player DOM and detail pages, then passes it in the native VIDAA player handoff payload so the system player shows the correct title. |
| **Mark as watched after native handoff** ([#13](https://github.com/NoobyGains/stremio-vidaa-tv/issues/13)) | After launching the native player, estimates progress and dispatches a mark-as-watched action to stremio-core so your library stays in sync. |

### Performance

| Fix | Description |
|---|---|
| **Prefetch next episode** ([#15](https://github.com/NoobyGains/stremio-vidaa-tv/issues/15)) | When watching a series, automatically fires a background fetch for the next episode's stream URL to warm the streaming server cache and reduce load time. |

### Existing VIDAA-Specific Features

These were already in the build before the above patches:

- **VIDAA keyboard fix** — 3-layer interception for the VIDAA on-screen keyboard
- **Native VIDAA player handoff** — Yellow button opens current stream in the system player for full DV/HDR hardware decode
- **VIDAA API integration** — Trusted domain registration, device capability detection, real-time video state observers
- **One-click launcher install** — Permanent TV launcher icon via `Hisense_installApp`
- **Channel Up/Down quick seek** — 60-second skip forward/back
- **720p viewport correction** — Auto-zoom fix for projectors and 720p-reporting TVs
- **Memory pressure monitoring** — Warns when JS heap usage exceeds 85%
- **Smart DV/HDR handling** — Detects stalled DV playback and offers native player, transcode, or alternative source

## Remote Control Shortcuts

| Button | Action |
|---|---|
| **Red** | Toggle resolution indicator (or Stream Stats overlay in player when enabled) |
| **Green** | Show/hide server health overlay (status, latency, version) |
| **Yellow** | Open current stream in native VIDAA player (full hardware DV/HDR decode) |
| **Blue** | Force transcode current stream |
| **Info / Display** | Show stream details (resolution, buffer, codec, VIDAA device info) |

## Troubleshooting

> **On projectors, Method 2 is the reliable path.** Most current Hisense projectors (PX3-Pro, M2 Pro, C2, C2 Mini, Smart Mini C2) silently drop `Hisense_installApp` even when it returns success — the launcher icon never appears no matter how many times you restart. Just bookmark `noobygains.github.io/stremio-vidaa-tv` in the TV's Internet Browser and open it from there. It works identically to the installed version.

| Problem | Solution |
|---|---|
| **Installer: "Install" button does nothing** | You need Developer Mode. Normally: Settings > System > About > press **1234** on the remote. **Your projector remote has no number buttons?** See "No number buttons on your remote" below. |
| **Installer says success but no launcher app appears** | This is the firmware-level silent-drop on current Hisense projectors and newer VIDAA builds — not something we can fix. Skip the launcher, use **Method 2** (bookmark in the TV Browser). |
| **No number buttons on your remote (projectors, M2/C2/PX3-Pro)** | Try in this order: (1) Install **RemoteNow** on your phone — its virtual numpad enters `1234` on the About screen; (2) Check **Settings > System > Developer Options** directly — some newer firmware has the toggle without needing `1234`; (3) Try the hidden key sequence: **Home ×3, Up ×2, Right, Left, Right, Left, Right**; (4) Plug in a USB keyboard and type `1234`. If none of that works, skip Developer Mode entirely and use Method 2. |
| **Can't find the browser on TV** | The Internet Browser may be hidden. Go to Home > Apps > All Apps and look for "Browser" or a globe icon. |
| **"Server Offline" in Settings** | Your streaming server must be running on a device on the same network. Test by visiting `http://<server-ip>:11470/heartbeat` in a browser. Most Real-Debrid users don't need a server at all. |
| **Black screen during playback** | Could be: DV content in MP4 container (use MKV sources instead), content above 4K resolution, or an unsupported codec. The app detects stalled playback and offers options. |
| **Playback stops after a few minutes** | Usually a server connection issue. If you don't use a streaming server, this shouldn't happen. If you do, check that the server URL is correct in Settings. |
| **Search keyboard doesn't work** | Check the version number in the bottom-right corner. If it doesn't show v7, clear the browser cache or add `?v=new` to the URL. |
| **App shows old version** | The service worker may be caching an old copy. Go to Settings > Clear Data, or clear the TV browser cache. |
| **720p UI is clipped** | The app auto-detects 720p viewports and applies zoom correction. If it's not working, your TV may report a non-standard viewport size. |

## How It Works

```
┌──────────────────────────────────────────┐
│  Stremio Theater v1.9.2 Frontend (UI)    │
│  58 original chunks: home, discover,     │
│  search, player, settings, library,      │
│  addons, login, details, video, etc.     │
├──────────────────────────────────────────┤
│  v7 Patch Layer (index.html)             │
│  Server sync, codec detection, VIDAA API │
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

The v7 patch layer sits between the original UI and the core engine. All patches are isolated in `index.html` as self-contained scripts, with two surgical one-line edits in the bundled chunks for error handling and transcoding hooks. The WASM binary and original UI chunks are untouched.

## Under the Hood

This build is backed by reverse engineering of the VIDAA OS browser environment. Through live hardware scanning of a Hisense PX1HE, we mapped 110+ VIDAA JavaScript APIs, the full codec pipeline, HDR/Dolby Vision capabilities, DRM support, and the native app installation system.

Key discoveries:
- DV+HDR content in MKV containers plays natively at 4K in the VIDAA browser (no transcoding required)
- The `Hisense_installApp` API enables permanent launcher installation from trusted domains
- Real-time video state observers (`Hisense_RegisterObserver`) provide live codec and HDR status
- The `omi_platform.sendPlatformMessage` interface accepts native player handoff commands

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

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
  <img src="https://img.shields.io/badge/core-stremio--core--web%20v5%20(0.53.0)-purple" alt="Core version" />
  <img src="https://img.shields.io/badge/platform-VIDAA%20OS-green" alt="Platform" />
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

## Quick Start

### Option A — GitHub Pages (easiest)

The app is live at:

```
https://noobygains.github.io/stremio-vidaa-tv/
```

Point your [stremio-hisense-install](https://github.com/Stremio/stremio-hisense-install) sideload script at this URL and you're done.

### Option B — Self-hosted with Docker

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY . .
EXPOSE 8000
CMD ["python", "-m", "http.server", "8000"]
```

```yaml
# docker-compose.yml
version: "3.8"
services:
  stremio-tvos:
    build: .
    ports:
      - "8000:8000"
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

## How It Works

```
┌──────────────────────────────────────────┐
│  Stremio Theater v1.9.2 Frontend (UI)    │
│  58 original chunks: home, discover,     │
│  search, player, settings, library,      │
│  addons, login, details, video, etc.     │
├──────────────────────────────────────────┤
│  v5 Core Bridge (core.chunk.js)          │
│  External Worker loader → v5-worker.js   │
├──────────────────────────────────────────┤
│  stremio-core-web v5 WASM (0.53.0)      │
│  stremio_core_web_bg.wasm                │
├──────────────────────────────────────────┤
│  Service Worker (sw.js)                  │
│  Caches app shell for instant TV boot    │
└──────────────────────────────────────────┘
```

## Requirements

- **Hisense / Toshiba TV** running **VIDAA OS**
- The [stremio-hisense-install](https://github.com/Stremio/stremio-hisense-install) sideload script
- A [Stremio streaming server](https://github.com/Stremio/stremio-server) running on your network (for transcoding)

## Credits

- [Stremio](https://github.com/Stremio) — original Stremio web app, core, and sideload tooling

## Disclaimer

This is an unofficial, community-maintained build for educational and self-hosting purposes only. All Stremio trademarks belong to Smart Code OOD. This project is not affiliated with or endorsed by Stremio.

## License

The original Stremio code is licensed under [GPLv2](https://github.com/user-attachments/files/19851539/LICENSE.md). Modifications in this repository follow the same license.

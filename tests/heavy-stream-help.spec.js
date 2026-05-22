// @ts-check
// Tests for task #4 — helping a TV-only user (no PC) who hits a stream too heavy
// for the VIDAA browser. Two deliverables:
//   (A) honest, NON-BLOCKING choice card on the no-escape stall path
//   (B) easy helper-server setup flow (point the TV at a Stremio streaming server)
//
// Hard rules under test:
//   • never blocks / skips / auto-changes a stream without the user choosing it
//   • no fullscreen overlay that traps the remote (corner card, focusable, Back)
//   • everything dismissible
//   • server setup reuses the existing mechanism (stremio_server_url +
//     window.__STREMIO_SERVER_URL__) and the SAME /settings probe as the diagnostic
const { test, expect } = require('@playwright/test');

test.setTimeout(60000);

// ==========================================================================
// (A) Heavy-stream choice card
// ==========================================================================
test.describe('(A) Heavy-stream choice card', () => {
  test('window.__showHeavyStreamChoiceCard exists', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const exists = await page.evaluate(() => typeof window.__showHeavyStreamChoiceCard === 'function');
    expect(exists).toBe(true);
  });

  test('renders a NON-fullscreen, dismissible corner card with THREE actions', async ({ page }) => {
    await page.goto('/#/player/abc/st/mt/movie/tt123/tt123');
    await page.waitForTimeout(1500);
    const result = await page.evaluate(async () => {
      window.__showHeavyStreamChoiceCard();
      var el = document.getElementById('dv-heavy-choice');
      if (!el) return { present: false };
      var isFullscreen = (el.offsetWidth >= window.innerWidth - 2) && (el.offsetHeight >= window.innerHeight - 2);
      var buttons = el.querySelectorAll('button');
      var labels = Array.prototype.map.call(buttons, function (b) { return (b.textContent || '').trim(); });
      // Dismiss via the "keep trying" action.
      var keep = Array.prototype.find.call(buttons, function (b) { return /keep trying/i.test(b.textContent || ''); });
      if (keep) keep.click();
      await new Promise((r) => setTimeout(r, 50));
      var dismissed = !document.getElementById('dv-heavy-choice');
      return { present: true, isFullscreen: isFullscreen, count: buttons.length, labels: labels, dismissed: dismissed };
    });
    expect(result.present).toBe(true);
    expect(result.isFullscreen).toBe(false);
    expect(result.count).toBeGreaterThanOrEqual(3);
    expect(result.dismissed).toBe(true);
    // The three intents are present.
    const joined = result.labels.join(' | ').toLowerCase();
    expect(/plays here|version that plays/.test(joined)).toBe(true);
    expect(/helper|4k/.test(joined)).toBe(true);
    expect(/keep trying/.test(joined)).toBe(true);
  });

  test('"Keep trying this one" does NOT pause/seek/navigate (never touches playback)', async ({ page }) => {
    await page.goto('/#/player/abc/st/mt/movie/tt123/tt123');
    await page.waitForTimeout(1500);
    const result = await page.evaluate(async () => {
      var v = document.createElement('video');
      document.body.appendChild(v);
      var pauseCalls = 0, playCalls = 0;
      v.pause = function () { pauseCalls++; };
      v.play = function () { playCalls++; return Promise.resolve(); };
      var hashBefore = window.location.hash;
      window.__showHeavyStreamChoiceCard();
      var keep = Array.prototype.find.call(document.querySelectorAll('#dv-heavy-choice button'), function (b) { return /keep trying/i.test(b.textContent || ''); });
      if (keep) keep.click();
      await new Promise((r) => setTimeout(r, 100));
      return { pauseCalls: pauseCalls, playCalls: playCalls, hashUnchanged: window.location.hash === hashBefore };
    });
    expect(result.pauseCalls).toBe(0);
    expect(result.playCalls).toBe(0);
    expect(result.hashUnchanged).toBe(true);
  });

  test('__navigateToStreamsList reconstructs the metadetails URL for the SAME title from a player hash', async ({ page }) => {
    // Unit-test the reliable navigation directly with the player hash captured at
    // stall time. (The full SPA redirects the player route to /login when
    // unauthenticated, so we pass the captured hash explicitly — exactly what the
    // card does in production via capturedPlayerHash.)
    await page.goto('/');
    await page.waitForTimeout(800);
    const newHash = await page.evaluate(async () => {
      var target = window.__navigateToStreamsList('#/player/streamdata/stTrans/mtTrans/movie/tt0111161/tt0111161');
      await new Promise((r) => setTimeout(r, 100));
      return { returned: target, hash: window.location.hash };
    });
    // Never an auto-skip to a different player URL — it lands on the streams view.
    expect(newHash.returned.indexOf('#/player/')).toBe(-1);
    expect(/#\/(metadetails|detail)\/movie\/tt0111161/.test(newHash.returned)).toBe(true);
  });

  test('"Show me a version that plays here" leaves the player route (does not auto-skip to another stream)', async ({ page }) => {
    await page.goto('/#/player/streamdata/stTrans/mtTrans/movie/tt0111161/tt0111161');
    const result = await page.evaluate(async () => {
      // No core streams -> robust baseline = navigate away from the player to the list.
      window.__showHeavyStreamChoiceCard();
      var btn = Array.prototype.find.call(document.querySelectorAll('#dv-heavy-choice button'), function (b) { return /plays here|version that plays/i.test(b.textContent || ''); });
      var clicked = !!btn;
      if (btn) btn.click();
      await new Promise((r) => setTimeout(r, 200));
      return { clicked: clicked, hash: window.location.hash };
    });
    expect(result.clicked).toBe(true);
    // It must have left the original player stream (never silently kept or
    // auto-switched to a different /player/ URL behind the user's back).
    expect(result.hash).not.toBe('#/player/streamdata/stTrans/mtTrans/movie/tt0111161/tt0111161');
    expect(result.hash.indexOf('#/player/')).toBe(-1);
  });

  test('__findDirectPlayStream returns a direct-play-friendly stream when core lists one', async ({ page }) => {
    await page.addInitScript(() => {
      window.__mockCore = {
        getState: function (model) {
          if (model === 'streaming' || model === 'player') {
            return {
              streams: [
                { name: 'RD+', title: 'Movie.2024.2160p.HEVC.HDR.x265.mkv', url: 'http://x/4k.mkv' },
                { name: 'RD+', title: 'Movie.2024.1080p.x264.mp4', url: 'http://x/1080.mp4' }
              ]
            };
          }
          return null;
        },
        dispatch: function () {}
      };
      Object.defineProperty(window, 'core', {
        get: function () { return window.__mockCore; },
        set: function () {},
        configurable: true
      });
    });
    await page.goto('/#/player/x/st/mt/movie/tt1/tt1');
    await page.waitForTimeout(1500);
    const picked = await page.evaluate(() => {
      var s = window.__findDirectPlayStream();
      return s ? { url: s.url, title: s.title } : null;
    });
    expect(picked).not.toBeNull();
    // It must pick the 1080p MP4/H.264 one, not the 4K MKV.
    expect(picked.url).toBe('http://x/1080.mp4');
  });

  test('__findDirectPlayStream returns null when only heavy 4K MKV streams exist', async ({ page }) => {
    await page.addInitScript(() => {
      window.__mockCore = {
        getState: function () {
          return { streams: [
            { name: 'RD+', title: 'Movie.2160p.HEVC.HDR.x265.mkv', url: 'http://x/4k.mkv' },
            { name: 'RD+', title: 'Movie.2160p.DV.x265.mkv', url: 'http://x/4k2.mkv' }
          ] };
        },
        dispatch: function () {}
      };
      Object.defineProperty(window, 'core', { get: function () { return window.__mockCore; }, set: function () {}, configurable: true });
    });
    await page.goto('/#/player/x/st/mt/movie/tt2/tt2');
    await page.waitForTimeout(1500);
    const picked = await page.evaluate(() => window.__findDirectPlayStream());
    expect(picked).toBeNull();
  });
});

// ==========================================================================
// (B) Helper-server setup flow
// ==========================================================================
test.describe('(B) Helper-server setup flow', () => {
  test('registered as a VIDAA settings item', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    const registered = await page.evaluate(() => {
      var items = window.__vidaaSettingsItems || [];
      return items.some(function (i) { return /helper/i.test(i.label || '') || /helper/i.test(i.id || ''); });
    });
    expect(registered).toBe(true);
  });

  test('shows a dismissible, NON-fullscreen card with step-by-step copy + URL input', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const result = await page.evaluate(async () => {
      window.__showHelperServerSetup();
      var el = document.getElementById('dv-helper-setup');
      if (!el) return { present: false };
      var isFullscreen = (el.offsetWidth >= window.innerWidth - 2) && (el.offsetHeight >= window.innerHeight - 2);
      var hasInput = !!el.querySelector('input');
      var text = el.textContent || '';
      var mentionsSteps = /same wi-?fi|phone|pc|address/i.test(text);
      // Dismiss
      var close = Array.prototype.find.call(el.querySelectorAll('button'), function (b) { return /close|cancel|dismiss/i.test(b.textContent || ''); });
      if (close) close.click();
      await new Promise((r) => setTimeout(r, 50));
      var dismissed = !document.getElementById('dv-helper-setup');
      return { present: true, isFullscreen: isFullscreen, hasInput: hasInput, mentionsSteps: mentionsSteps, dismissed: dismissed };
    });
    expect(result.present).toBe(true);
    expect(result.isFullscreen).toBe(false);
    expect(result.hasInput).toBe(true);
    expect(result.mentionsSteps).toBe(true);
    expect(result.dismissed).toBe(true);
  });

  test('__setStremioServerUrl writes localStorage + window global (existing mechanism)', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1000);
    const result = await page.evaluate(() => {
      window.core = { getState: function () { return Promise.resolve(null); }, dispatch: function () { return Promise.resolve(); } };
      window.__setStremioServerUrl('http://192.168.1.77:11470/');
      return {
        ls: localStorage.getItem('stremio_server_url'),
        global: window.__STREMIO_SERVER_URL__
      };
    });
    // Trailing slash normalized away, matching the existing loader at line ~41.
    expect(result.ls).toBe('http://192.168.1.77:11470');
    expect(result.global).toBe('http://192.168.1.77:11470');
  });

  test('saving a REACHABLE server shows a reachable result (same /settings probe)', async ({ page }) => {
    // Mock a reachable server at a DISTINCT origin (a real helper server is
    // always cross-origin, e.g. http://192.168.x.x:11470 — using a distinct host
    // also avoids the app's own service worker intercepting same-origin /settings).
    await page.route('**/settings', async (route) => {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify({ values: { serverVersion: '4.20.0' } }) });
    });
    await page.goto('/');
    await page.waitForTimeout(1500);
    const status = await page.evaluate(async () => {
      window.core = { getState: function () { return Promise.resolve(null); }, dispatch: function () { return Promise.resolve(); } };
      window.__showHelperServerSetup();
      var el = document.getElementById('dv-helper-setup');
      var input = el.querySelector('input');
      input.value = 'http://helper.test:11470'; // distinct origin, mocked above
      var saveBtn = Array.prototype.find.call(el.querySelectorAll('button'), function (b) { return /save|connect|check/i.test(b.textContent || ''); });
      saveBtn.click();
      // Wait for the probe.
      await new Promise((r) => setTimeout(r, 1500));
      var statusEl = document.getElementById('dv-helper-status');
      return statusEl ? statusEl.textContent : '';
    });
    expect(/reachable|connected|online|success/i.test(status)).toBe(true);
    expect(/unreachable|not reachable|fail/i.test(status)).toBe(false);
  });

  test('saving an UNREACHABLE server shows an unreachable result', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(1500);
    const status = await page.evaluate(async () => {
      window.core = { getState: function () { return Promise.resolve(null); }, dispatch: function () { return Promise.resolve(); } };
      window.__showHelperServerSetup();
      var el = document.getElementById('dv-helper-setup');
      var input = el.querySelector('input');
      input.value = 'http://10.255.255.1:11470'; // non-routable -> will fail/timeout fast-ish
      var saveBtn = Array.prototype.find.call(el.querySelectorAll('button'), function (b) { return /save|connect|check/i.test(b.textContent || ''); });
      saveBtn.click();
      await new Promise((r) => setTimeout(r, 4000));
      var statusEl = document.getElementById('dv-helper-status');
      return statusEl ? statusEl.textContent : '';
    });
    expect(/unreachable|not reachable|couldn|fail|timed out/i.test(status)).toBe(true);
  });

  test('once a real server is set, Force Transcode (gated) becomes available in the overlay', async ({ page }) => {
    await page.goto('/#/player/x/st/mt/movie/tt9/tt9');
    await page.waitForTimeout(1500);
    const present = await page.evaluate(() => {
      window.core = { getState: function () { return Promise.resolve(null); }, dispatch: function () { return Promise.resolve(); } };
      // Use the helper setter to configure a real (non-default) server.
      window.__setStremioServerUrl('http://192.168.1.50:11470');
      window.__STREAM_INFO__ = window.__STREAM_INFO__ || { videoCodec: 'hevc', width: 3840, height: 2160 };
      window.__showPlaybackWarning();
      var btns = Array.prototype.slice.call(document.querySelectorAll('#dv-warning button'));
      var transBtn = btns.find(function (b) { return /transcode/i.test(b.textContent || ''); });
      return { present: !!transBtn, disabled: !!(transBtn && transBtn.disabled), label: transBtn ? transBtn.textContent : '' };
    });
    expect(present.present).toBe(true);
    expect(present.disabled).toBe(false);
    expect(/needs streaming-server/i.test(present.label)).toBe(false);
  });
});

// ==========================================================================
// No-silent-block guarantee (cross-cutting)
// ==========================================================================
test.describe('No-silent-block guarantee', () => {
  test('showing the heavy-stream card never pauses or seeks the active video', async ({ page }) => {
    await page.goto('/#/player/x/st/mt/movie/tt5/tt5');
    await page.waitForTimeout(1500);
    const result = await page.evaluate(async () => {
      var v = document.createElement('video');
      document.body.appendChild(v);
      var pauseCalls = 0, seekSets = 0;
      v.pause = function () { pauseCalls++; };
      var realCT = 0;
      Object.defineProperty(v, 'currentTime', { configurable: true, get: function () { return realCT; }, set: function (x) { seekSets++; realCT = x; } });
      window.__showHeavyStreamChoiceCard();
      await new Promise((r) => setTimeout(r, 100));
      return { pauseCalls: pauseCalls, seekSets: seekSets, cardPresent: !!document.getElementById('dv-heavy-choice') };
    });
    expect(result.cardPresent).toBe(true);
    expect(result.pauseCalls).toBe(0);
    expect(result.seekSets).toBe(0);
  });
});

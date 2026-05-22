// @ts-check
// Honest-behaviour tests for the native-player handoff, transcode gating,
// stall watchdog, and the new diagnostic panel.
//
// These REPLACE the false-confidence tests that injected a fake omi_platform
// and asserted "messages were SENT" — those passed while the feature was 100%
// broken on real hardware. The native handoff is fire-and-forget against a
// fabricated API contract (launchNativePlayer/openMediaPlayer/playVideo are not
// honoured by any VIDAA firmware). The only honest signal that the native app
// actually opened is the browser tab being backgrounded
// (visibilitychange->hidden / blur / pagehide). When no such signal arrives we
// MUST report failure and never corrupt watch state.
const { test, expect } = require('@playwright/test');

test.setTimeout(60000);

// Helper: install a fake omi_platform BEFORE page scripts run, recording every
// message sent. By default it does NOT simulate the app backgrounding (because
// real VIDAA firmware ignores these messages — nothing happens).
function installFakeNative(page, { capture = '__sentMessages' } = {}) {
  return page.addInitScript((captureKey) => {
    window[captureKey] = [];
    window.omi_platform = {
      sendPlatformMessage: function (msg) {
        try { window[captureKey].push(JSON.parse(msg)); } catch (e) { window[captureKey].push(msg); }
      }
    };
  }, capture);
}

// ==========================================================================
// H1 — Launcher reports FAILURE when no backgrounding signal occurs
// ==========================================================================
test.describe('H1 — launcher honesty (verification required)', () => {
  test('returns a Promise', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/');
    await page.waitForTimeout(2500);
    const isPromise = await page.evaluate(() => {
      const r = window.__launchNativePlayer('http://stream.test/video.mkv', { verifyTimeoutMs: 50 });
      return r && typeof r.then === 'function';
    });
    expect(isPromise).toBe(true);
  });

  test('resolves FALSE when the app never backgrounds (fire-and-forget, no ack)', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/#/player/h1-nofail');
    await page.waitForTimeout(2500);
    const result = await page.evaluate(async () => {
      // No visibilitychange / blur / pagehide will fire — simulating real VIDAA
      // where the message is silently ignored and the browser stays foreground.
      return await window.__launchNativePlayer('http://stream.test/video.mkv', { verifyTimeoutMs: 300 });
    });
    expect(result).toBe(false);
  });

  test('resolves TRUE when a backgrounding signal (visibilitychange->hidden) arrives', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/#/player/h1-ok');
    await page.waitForTimeout(2500);
    const result = await page.evaluate(async () => {
      const p = window.__launchNativePlayer('http://stream.test/video.mkv', { verifyTimeoutMs: 2000 });
      // Simulate the native app taking the foreground shortly after.
      setTimeout(() => {
        try {
          Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
          Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
        } catch (e) {}
        document.dispatchEvent(new Event('visibilitychange'));
      }, 60);
      return await p;
    });
    expect(result).toBe(true);
  });

  test('resolves FALSE when omi_platform is absent', async ({ page }) => {
    await page.goto('/#/player/h1-noapi');
    await page.waitForTimeout(2500);
    const result = await page.evaluate(async () => {
      try { delete window.omi_platform; } catch (e) {}
      return await window.__launchNativePlayer('http://stream.test/video.mkv', { verifyTimeoutMs: 100 });
    });
    expect(result).toBe(false);
  });

  test('still dispatches the platform messages (best-effort send) even though result reflects verification', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/#/player/h1-send');
    await page.waitForTimeout(2500);
    const sent = await page.evaluate(async () => {
      await window.__launchNativePlayer('http://stream.test/video.mkv', { verifyTimeoutMs: 100 });
      return window.__sentMessages || [];
    });
    // Best-effort: at least one message dispatched, each carrying the URL.
    expect(sent.length).toBeGreaterThan(0);
    const withUrl = sent.find((m) => m && m.url === 'http://stream.test/video.mkv');
    expect(withUrl).toBeDefined();
  });
});

// ==========================================================================
// H2 — Single consolidated launcher (no racing redefinitions)
// ==========================================================================
test.describe('H2 — single consolidated launcher', () => {
  test('launcher identity is stable after all timers settle (no blind 10s overwrite)', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/');
    // Wait past the historical 10s blind-overwrite window.
    await page.waitForTimeout(11500);
    const stable = await page.evaluate(async () => {
      const before = window.__launchNativePlayer;
      await new Promise((r) => setTimeout(r, 1500));
      const after = window.__launchNativePlayer;
      return before === after && typeof after === 'function';
    });
    expect(stable).toBe(true);
  });
});

// ==========================================================================
// H3 — Mark-as-watched only on VERIFIED launch; never corrupt resume point
// ==========================================================================
test.describe('H3 — no fake-progress corruption', () => {
  test('does NOT dispatch any SetProp currentTime (fake 90% progress removed)', async ({ page }) => {
    await page.addInitScript(() => {
      window.__coreDispatches = [];
      window.__mockCore = {
        dispatch: function (action, ctx) { window.__coreDispatches.push({ action, ctx }); },
        getState: function () {
          return Promise.resolve({ metaItem: { id: 'tt123' }, video: { id: 'tt123:1:1' } });
        }
      };
      Object.defineProperty(window, 'core', {
        get: function () { return window.__mockCore; },
        set: function () {},
        configurable: true
      });
    });
    await installFakeNative(page);
    // Enable the watched toggle so we exercise the path that USED to corrupt progress.
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('stremio_native_handoff', 'true'));
    await page.goto('/#/player/h3-progress');
    await page.waitForTimeout(2500);
    // Verified launch via visibilitychange.
    await page.evaluate(async () => {
      const p = window.__launchNativePlayer('http://stream.test/video.mkv', { verifyTimeoutMs: 2000, watchedDelayMs: 50 });
      setTimeout(() => {
        try {
          Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
          Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
        } catch (e) {}
        document.dispatchEvent(new Event('visibilitychange'));
      }, 60);
      await p;
      await new Promise((r) => setTimeout(r, 300));
    });
    const dispatches = await page.evaluate(() => window.__coreDispatches || []);
    const fakeProgress = dispatches.find((d) =>
      d.action && d.action.args && d.action.args.args &&
      d.action.args.args.propName === 'currentTime'
    );
    expect(fakeProgress).toBeUndefined();
  });

  test('does NOT mark-as-watched when launch is NOT verified', async ({ page }) => {
    await page.addInitScript(() => {
      window.__coreDispatches = [];
      window.__mockCore = {
        dispatch: function (action, ctx) { window.__coreDispatches.push({ action, ctx }); },
        getState: function () {
          return Promise.resolve({ metaItem: { id: 'tt999' }, video: { id: 'tt999:1:1' } });
        }
      };
      Object.defineProperty(window, 'core', {
        get: function () { return window.__mockCore; },
        set: function () {},
        configurable: true
      });
    });
    await installFakeNative(page);
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('stremio_native_handoff', 'true'));
    await page.goto('/#/player/h3-unverified');
    await page.waitForTimeout(2500);
    await page.evaluate(async () => {
      // No backgrounding signal -> unverified -> no watched dispatch.
      await window.__launchNativePlayer('http://stream.test/video.mkv', { verifyTimeoutMs: 200, watchedDelayMs: 50 });
      await new Promise((r) => setTimeout(r, 300));
    });
    const dispatches = await page.evaluate(() => window.__coreDispatches || []);
    const markWatched = dispatches.find((d) =>
      d.action && d.action.args && d.action.args.action === 'MarkAsWatched'
    );
    expect(markWatched).toBeUndefined();
  });

  test('marks-as-watched ONLY when verified AND toggle is on', async ({ page }) => {
    await page.addInitScript(() => {
      window.__coreDispatches = [];
      window.__mockCore = {
        dispatch: function (action, ctx) { window.__coreDispatches.push({ action, ctx }); },
        getState: function () {
          return Promise.resolve({ metaItem: { id: 'ttOK' }, video: { id: 'ttOK:1:1' } });
        }
      };
      Object.defineProperty(window, 'core', {
        get: function () { return window.__mockCore; },
        set: function () {},
        configurable: true
      });
    });
    await installFakeNative(page);
    await page.goto('/');
    await page.evaluate(() => localStorage.setItem('stremio_native_handoff', 'true'));
    await page.goto('/#/player/h3-verified');
    await page.waitForTimeout(2500);
    await page.evaluate(async () => {
      const p = window.__launchNativePlayer('http://stream.test/video.mkv', { verifyTimeoutMs: 2000, watchedDelayMs: 50 });
      setTimeout(() => {
        try {
          Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
          Object.defineProperty(document, 'hidden', { configurable: true, get: () => true });
        } catch (e) {}
        document.dispatchEvent(new Event('visibilitychange'));
      }, 60);
      await p;
      await new Promise((r) => setTimeout(r, 400));
    });
    const dispatches = await page.evaluate(() => window.__coreDispatches || []);
    const markWatched = dispatches.find((d) =>
      d.action && d.action.args && d.action.args.action === 'MarkAsWatched'
    );
    expect(markWatched).toBeTruthy();
  });
});

// ==========================================================================
// H4/M3 — Overlay Force-Transcode gated/labelled when no server
// ==========================================================================
test.describe('H4/M3 — overlay transcode gating', () => {
  test('overlay copy does not advertise transcode as a generic remedy', async ({ page }) => {
    await page.goto('/');
    const src = await page.content();
    // The misleading phrase must be gone.
    expect(src.includes('or transcode via your streaming server')).toBe(false);
  });

  test('Force Transcode button does NOT set __FORCE_TRANSCODE__ when no real server', async ({ page }) => {
    await page.goto('/#/player/h4-noserver');
    await page.waitForTimeout(1000);
    const set = await page.evaluate(() => {
      window.__STREMIO_SERVER_URL__ = 'http://127.0.0.1:11470'; // default == no real server
      window.__STREAM_INFO__ = window.__STREAM_INFO__ || {};
      window.__FORCE_TRANSCODE__ = false;
      window.__showPlaybackWarning && window.__showPlaybackWarning();
      // Click the Force Transcode button if present & enabled.
      var btns = Array.prototype.slice.call(document.querySelectorAll('#dv-warning button'));
      var transBtn = btns.find(function (b) { return /transcode/i.test(b.textContent || ''); });
      if (transBtn && !transBtn.disabled) transBtn.click();
      var wasDisabledOrAbsent = !transBtn || transBtn.disabled;
      return { force: window.__FORCE_TRANSCODE__, wasDisabledOrAbsent: wasDisabledOrAbsent };
    });
    // Either the button was disabled/absent, OR clicking it did nothing — but it
    // must NOT have pretended transcode was available.
    expect(set.force).not.toBe(true);
  });

  test('Force Transcode IS available when a real streaming server is configured', async ({ page }) => {
    await page.goto('/#/player/h4-server');
    await page.waitForTimeout(1000);
    const set = await page.evaluate(() => {
      window.__STREMIO_SERVER_URL__ = 'http://192.168.1.50:11470'; // real, non-default
      window.__STREAM_INFO__ = window.__STREAM_INFO__ || {};
      window.__FORCE_TRANSCODE__ = false;
      window.__showPlaybackWarning && window.__showPlaybackWarning();
      var btns = Array.prototype.slice.call(document.querySelectorAll('#dv-warning button'));
      var transBtn = btns.find(function (b) { return /transcode/i.test(b.textContent || ''); });
      if (transBtn && !transBtn.disabled) transBtn.click();
      return { force: window.__FORCE_TRANSCODE__, present: !!transBtn };
    });
    expect(set.present).toBe(true);
    expect(set.force).toBe(true);
  });
});

// ==========================================================================
// H5 — Watchdog UN-PAUSES the video on failed handoff
// ==========================================================================
test.describe('H5 — recovery un-pauses on failed handoff', () => {
  test('helper __recoverAfterFailedHandoff resumes a paused video and shows advice', async ({ page }) => {
    await page.goto('/#/player/h5');
    await page.waitForTimeout(1500);
    const result = await page.evaluate(async () => {
      var v = document.createElement('video');
      document.body.appendChild(v);
      var played = false;
      v.play = function () { played = true; return Promise.resolve(); };
      Object.defineProperty(v, 'paused', { configurable: true, get: function () { return !played; } });
      // Simulate a paused-after-failed-handoff state.
      window.__recoverAfterFailedHandoff(v);
      await new Promise((r) => setTimeout(r, 50));
      var toastShown = !!document.querySelector('#__handoff-fail-toast, .dv-honest-toast');
      return { played: played, toastShown: toastShown };
    });
    expect(result.played).toBe(true);
    expect(result.toastShown).toBe(true);
  });
});

// ==========================================================================
// M1 — Yellow-button toast reflects verified result
// ==========================================================================
test.describe('M1 — yellow-button toast honesty', () => {
  test('shows an honest failure toast when handoff is unverified', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/#/player/m1');
    await page.waitForTimeout(2500);
    const toastText = await page.evaluate(async () => {
      // Speed up verification for the test.
      window.__NATIVE_VERIFY_TIMEOUT_MS__ = 200;
      var video = document.createElement('video');
      video.src = 'http://stream.test/video.mkv';
      document.body.appendChild(video);
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 405, bubbles: true }));
      // Wait for verification window + a margin.
      await new Promise((r) => setTimeout(r, 600));
      var toasts = Array.prototype.slice.call(document.querySelectorAll('div'))
        .map(function (d) { return d.textContent || ''; })
        .filter(function (t) { return /native|player|open|couldn|stream/i.test(t) && t.length < 120; });
      return toasts.join(' || ');
    });
    // It must NOT falsely claim success ("Opening in native player...").
    expect(/opening in native player/i.test(toastText)).toBe(false);
  });
});

// ==========================================================================
// M2 — Overlay "Open in Native Player" keeps recovery UI on failure
// ==========================================================================
test.describe('M2 — overlay keeps recovery UI on failed handoff', () => {
  test('overlay is NOT removed when the handoff fails', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/#/player/m2');
    await page.waitForTimeout(2500);
    const stillThere = await page.evaluate(async () => {
      window.__NATIVE_VERIFY_TIMEOUT_MS__ = 200;
      window.__STREAM_INFO__ = window.__STREAM_INFO__ || {};
      var video = document.createElement('video');
      video.src = 'http://stream.test/video.mkv';
      document.body.appendChild(video);
      window.__showPlaybackWarning && window.__showPlaybackWarning();
      var btns = Array.prototype.slice.call(document.querySelectorAll('#dv-warning button'));
      var nativeBtn = btns.find(function (b) { return /native/i.test(b.textContent || ''); });
      if (nativeBtn) nativeBtn.click();
      await new Promise((r) => setTimeout(r, 600));
      return !!document.getElementById('dv-warning');
    });
    expect(stillThere).toBe(true);
  });
});

// ==========================================================================
// NEW — Diagnostic panel outputs the expected fields
// ==========================================================================
test.describe('Diagnostic panel', () => {
  test('window.__showVidaaDiagnostic exists and renders a screenshot-friendly panel', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/');
    await page.waitForTimeout(2000);
    const exists = await page.evaluate(() => typeof window.__showVidaaDiagnostic === 'function');
    expect(exists).toBe(true);
  });

  test('panel reports omi_platform + sendPlatformMessage presence (the key per-device datum)', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/');
    await page.waitForTimeout(2000);
    const text = await page.evaluate(() => {
      window.__STREAM_INFO__ = { videoCodec: 'hevc', width: 3840, height: 2160, container: 'mkv' };
      window.__showVidaaDiagnostic();
      var panel = document.getElementById('vidaa-diagnostic');
      return panel ? panel.textContent : '';
    });
    expect(/omi_platform/i.test(text)).toBe(true);
    expect(/sendPlatformMessage/i.test(text)).toBe(true);
  });

  test('panel includes stream container/codec/resolution and is dismissible', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/');
    await page.waitForTimeout(2000);
    const result = await page.evaluate(async () => {
      window.__STREAM_INFO__ = { videoCodec: 'hevc', width: 3840, height: 2160, container: 'mkv' };
      window.__showVidaaDiagnostic();
      var panel = document.getElementById('vidaa-diagnostic');
      var text = panel ? panel.textContent : '';
      var hasCodec = /hevc/i.test(text);
      var hasRes = /3840/.test(text) && /2160/.test(text);
      // Dismiss it.
      var closeBtn = panel && panel.querySelector('button');
      if (closeBtn) closeBtn.click();
      await new Promise((r) => setTimeout(r, 50));
      var dismissed = !document.getElementById('vidaa-diagnostic');
      return { hasCodec: hasCodec, hasRes: hasRes, dismissed: dismissed };
    });
    expect(result.hasCodec).toBe(true);
    expect(result.hasRes).toBe(true);
    expect(result.dismissed).toBe(true);
  });

  test('diagnostic is registered as a VIDAA settings item', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    const registered = await page.evaluate(() => {
      var items = window.__vidaaSettingsItems || [];
      return items.some(function (i) { return /diagnostic/i.test(i.id || '') || /diagnostic/i.test(i.label || ''); });
    });
    expect(registered).toBe(true);
  });

  test('diagnostic reachable via color-button combo (no number keys)', async ({ page }) => {
    await installFakeNative(page);
    await page.goto('/#/player/diag-combo');
    await page.waitForTimeout(2000);
    const shown = await page.evaluate(async () => {
      window.__STREAM_INFO__ = { videoCodec: 'hevc', width: 3840, height: 2160, container: 'mkv' };
      // Green held, then Red — the chosen combo (color keys only).
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 404, bubbles: true }));
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 403, bubbles: true }));
      await new Promise((r) => setTimeout(r, 100));
      return !!document.getElementById('vidaa-diagnostic');
    });
    expect(shown).toBe(true);
  });
});

// ==========================================================================
// NEW — Honest stall messaging (non-blocking, dismissible, toggleable)
// ==========================================================================
test.describe('Honest stall messaging', () => {
  test('__showHonestStallMessage renders a dismissible NON-fullscreen message', async ({ page }) => {
    await page.goto('/#/player/honest');
    await page.waitForTimeout(1500);
    const result = await page.evaluate(async () => {
      window.__showHonestStallMessage();
      var el = document.getElementById('dv-honest-stall');
      if (!el) return { present: false };
      var cs = getComputedStyle(el);
      // Must NOT be a fullscreen overlay that traps the remote.
      var isFullscreen = (el.offsetWidth >= window.innerWidth - 2) && (el.offsetHeight >= window.innerHeight - 2);
      var text = el.textContent || '';
      // Dismiss it.
      var btn = el.querySelector('button');
      if (btn) btn.click();
      await new Promise((r) => setTimeout(r, 50));
      var dismissed = !document.getElementById('dv-honest-stall');
      return { present: true, isFullscreen: isFullscreen, mentionsAdvice: /1080p|mp4|streaming server/i.test(text), dismissed: dismissed };
    });
    expect(result.present).toBe(true);
    expect(result.isFullscreen).toBe(false);
    expect(result.mentionsAdvice).toBe(true);
    expect(result.dismissed).toBe(true);
  });
});

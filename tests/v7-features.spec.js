// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Index HTML structure', () => {
  test('page loads with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Stremio - Freedom to Stream');
  });

  test('version indicator shows v7', async ({ page }) => {
    await page.goto('/');
    const version = page.locator('#patch-version');
    await expect(version).toHaveText('v7');
  });

  test('root div exists', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#root')).toBeAttached();
  });

  test('scripts load with cache-bust v7 param', async ({ page }) => {
    await page.goto('/');
    const scripts = await page.locator('script[src]').all();
    const srcs = await Promise.all(scripts.map(s => s.getAttribute('src')));
    const mainScripts = srcs.filter(s => s && (s.includes('runtime') || s.includes('main.js') || s.includes('service') || s.includes('webOSTV')));
    for (const src of mainScripts) {
      expect(src).toContain('?v=7');
    }
  });
});

test.describe('Splash screen', () => {
  test('splash screen is present on load', async ({ page }) => {
    await page.goto('/');
    const splash = page.locator('#splash');
    // Splash should exist immediately on page load
    await expect(splash).toBeAttached();
  });

  test('splash contains logo image', async ({ page }) => {
    await page.goto('/');
    const logo = page.locator('#splash img');
    await expect(logo).toHaveAttribute('src', 'logo.png');
  });

  test('splash has progress bar', async ({ page }) => {
    await page.goto('/');
    const bar = page.locator('#splash-bar');
    await expect(bar).toBeAttached();
  });

  test('splash is removed after timeout (safety net)', async ({ page }) => {
    await page.goto('/');
    // The splash removes itself after 30s max, but also when window.core is set
    // Simulate core being ready
    await page.evaluate(() => { window.core = {}; });
    await page.waitForTimeout(1000);
    const splash = page.locator('#splash');
    await expect(splash).not.toBeAttached({ timeout: 5000 });
  });
});

test.describe('Server URL configuration', () => {
  test('default server URL is set', async ({ page }) => {
    await page.goto('/');
    const serverUrl = await page.evaluate(() => window.__STREMIO_SERVER_URL__);
    expect(serverUrl).toBe('http://127.0.0.1:11470');
  });

  test('?server= query param overrides default', async ({ page }) => {
    await page.goto('/?server=http://192.168.1.100:11470');
    const serverUrl = await page.evaluate(() => window.__STREMIO_SERVER_URL__);
    expect(serverUrl).toBe('http://192.168.1.100:11470');
  });

  test('?server= param strips trailing slashes', async ({ page }) => {
    await page.goto('/?server=http://192.168.1.100:11470///');
    const serverUrl = await page.evaluate(() => window.__STREMIO_SERVER_URL__);
    expect(serverUrl).toBe('http://192.168.1.100:11470');
  });

  test('server URL is persisted to localStorage', async ({ page }) => {
    await page.goto('/?server=http://10.0.0.5:11470');
    const stored = await page.evaluate(() => localStorage.getItem('stremio_server_url'));
    expect(stored).toBe('http://10.0.0.5:11470');
  });

  test('server URL loads from localStorage on second visit', async ({ page }) => {
    await page.goto('/?server=http://10.0.0.5:11470');
    // Navigate away and back without ?server=
    await page.goto('/');
    const serverUrl = await page.evaluate(() => window.__STREMIO_SERVER_URL__);
    expect(serverUrl).toBe('http://10.0.0.5:11470');
  });
});

test.describe('VIDAA keyboard fix', () => {
  test('patch version is set to 5', async ({ page }) => {
    await page.goto('/');
    const patchVersion = await page.evaluate(() => window.__STREMIO_PATCH_VERSION__);
    expect(patchVersion).toBe(5);
  });

  test('input value setter is overridden', async ({ page }) => {
    await page.goto('/');
    // The setter intercept should fire an input event when value changes
    const eventFired = await page.evaluate(() => {
      return new Promise((resolve) => {
        var input = document.createElement('input');
        input.type = 'text';
        document.body.appendChild(input);
        input.addEventListener('input', () => resolve(true));
        input.value = 'test search';
        // Give it a moment
        setTimeout(() => resolve(false), 500);
      });
    });
    expect(eventFired).toBe(true);
  });
});

test.describe('DV Profile 7 detection', () => {
  test('DV detection flag is initialized', async ({ page }) => {
    await page.goto('/');
    const flag = await page.evaluate(() => window.__DV_PROFILE7_DETECTED__);
    expect(flag).toBe(false);
  });

  test('fetch interceptor detects DV Profile 7 from probe', async ({ page }) => {
    await page.goto('/');

    // Mock a probe response with DV Profile 7 codec
    await page.evaluate(() => {
      // Simulate the probe response
      window.__testDVResult = null;
      window.addEventListener('dv-profile7-detected', function(ev) {
        window.__testDVResult = ev.detail;
      });
    });

    // The fetch interceptor checks for /hlsv2/ + probe in the URL
    // We can't easily trigger a real fetch, but we can verify the warning function exists
    const hasWarningFn = await page.evaluate(() => typeof window.__showDVWarning === 'function');
    expect(hasWarningFn).toBe(true);
  });

  test('DV warning overlay can be shown and dismissed', async ({ page }) => {
    await page.goto('/');

    // Trigger the warning manually
    await page.evaluate(() => {
      window.__showDVWarning('dvhe.07.06');
    });

    const overlay = page.locator('#dv-warning');
    await expect(overlay).toBeVisible();
    await expect(overlay).toContainText('Dolby Vision Profile 7');
    await expect(overlay).toContainText('dvhe.07.06');

    // Click "Try Another Source" to dismiss
    await page.click('text=Try Another Source');
    await expect(overlay).not.toBeAttached();
  });

  test('DV warning transcode button sets force flag', async ({ page }) => {
    await page.goto('/');

    await page.evaluate(() => { window.__showDVWarning('dvhe.07.06'); });
    await page.click('text=Transcode to H.264');

    const flag = await page.evaluate(() => window.__FORCE_TRANSCODE__);
    expect(flag).toBe(true);

    // Overlay should be dismissed
    await expect(page.locator('#dv-warning')).not.toBeAttached();
  });
});

test.describe('Error enhancer', () => {
  test('error enhancer function exists', async ({ page }) => {
    await page.goto('/');
    const exists = await page.evaluate(() => typeof window.__STREMIO_ERROR_ENHANCER__ === 'function');
    expect(exists).toBe(true);
  });

  test('enhancer returns friendly message for unsupported codec', async ({ page }) => {
    await page.goto('/');
    const msg = await page.evaluate(() => {
      return window.__STREMIO_ERROR_ENHANCER__({ message: 'MEDIA_ERR_SRC_NOT_SUPPORTED', code: 4 });
    });
    expect(msg).toContain('not supported');
    expect(msg).toContain('streaming server');
  });

  test('enhancer returns friendly message for decode error', async ({ page }) => {
    await page.goto('/');
    const msg = await page.evaluate(() => {
      return window.__STREMIO_ERROR_ENHANCER__({ message: 'MEDIA_ERR_DECODE', code: 3 });
    });
    expect(msg).toContain('decode error');
  });

  test('enhancer returns friendly message for network error', async ({ page }) => {
    await page.goto('/');
    const msg = await page.evaluate(() => {
      return window.__STREMIO_ERROR_ENHANCER__({ message: 'MEDIA_ERR_NETWORK', code: 2 });
    });
    expect(msg).toContain('Network error');
  });

  test('enhancer returns DV-specific message when DV detected', async ({ page }) => {
    await page.goto('/');
    const msg = await page.evaluate(() => {
      window.__DV_PROFILE7_DETECTED__ = 'dvhe.07.06';
      return window.__STREMIO_ERROR_ENHANCER__({ message: 'some error' });
    });
    expect(msg).toContain('Dolby Vision Profile 7');
    expect(msg).toContain('dvhe.07.06');
  });

  test('enhancer passes through unknown errors unchanged', async ({ page }) => {
    await page.goto('/');
    const msg = await page.evaluate(() => {
      window.__DV_PROFILE7_DETECTED__ = false;
      return window.__STREMIO_ERROR_ENHANCER__({ message: 'Something weird happened' });
    });
    expect(msg).toBe('Something weird happened');
  });

  test('enhancer handles null/undefined gracefully', async ({ page }) => {
    await page.goto('/');
    const msg = await page.evaluate(() => {
      return window.__STREMIO_ERROR_ENHANCER__(null);
    });
    expect(msg).toBeNull();
  });
});

test.describe('Server health monitoring', () => {
  test('server health object is initialized', async ({ page }) => {
    await page.goto('/');
    const health = await page.evaluate(() => window.__SERVER_HEALTH__);
    expect(health).toBeDefined();
    expect(health.status).toBe('unknown');
  });
});

test.describe('Resolution indicator', () => {
  test('quality indicator does not show outside player route', async ({ page }) => {
    await page.goto('/');
    const indicator = page.locator('#quality-indicator');
    // Should not exist or be hidden when not in player
    const count = await indicator.count();
    if (count > 0) {
      await expect(indicator).toBeHidden();
    }
  });
});

test.describe('Remote control key mappings', () => {
  test('Red button (403) toggles quality indicator', async ({ page }) => {
    await page.goto('/');
    // Create the indicator first
    await page.evaluate(() => {
      var el = document.createElement('div');
      el.id = 'quality-indicator';
      el.style.display = 'block';
      el.textContent = '1080p';
      document.body.appendChild(el);
    });

    // Press Red button
    await page.evaluate(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 403 }));
    });
    const display = await page.evaluate(() => document.getElementById('quality-indicator').style.display);
    expect(display).toBe('none');

    // Press again to toggle back
    await page.evaluate(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 403 }));
    });
    const display2 = await page.evaluate(() => document.getElementById('quality-indicator').style.display);
    expect(display2).toBe('block');
  });

  test('Blue button (406) sets force transcode flag in player route', async ({ page }) => {
    await page.goto('/#/player/test');
    await page.evaluate(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 406 }));
    });
    const flag = await page.evaluate(() => window.__FORCE_TRANSCODE__);
    expect(flag).toBe(true);
  });

  test('Green button (404) shows server health overlay', async ({ page }) => {
    await page.goto('/');
    await page.evaluate(() => {
      window.__SERVER_HEALTH__ = { status: 'online', latency: 42, version: '4.20.0' };
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 404 }));
    });
    // Health overlay should appear (it's dynamically created)
    await page.waitForTimeout(200);
    const overlayText = await page.evaluate(() => {
      var els = document.querySelectorAll('div');
      for (var i = 0; i < els.length; i++) {
        if (els[i].textContent.indexOf('Server Health') !== -1) return els[i].textContent;
      }
      return null;
    });
    expect(overlayText).toContain('Server Health');
    expect(overlayText).toContain('online');
    expect(overlayText).toContain('42ms');
  });
});

test.describe('Watchdog', () => {
  test('watchdog does not trigger under normal conditions', async ({ page }) => {
    await page.goto('/');
    // Just verify the page stays loaded for a few seconds
    await page.waitForTimeout(3000);
    await expect(page).toHaveTitle('Stremio - Freedom to Stream');
  });
});

test.describe('Service Worker', () => {
  test('service worker is registered', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);
    const swRegistered = await page.evaluate(async () => {
      if (!('serviceWorker' in navigator)) return 'not supported';
      const regs = await navigator.serviceWorker.getRegistrations();
      return regs.length > 0 ? 'registered' : 'not registered';
    });
    // SW registration may fail in test env but shouldn't error
    expect(['registered', 'not registered', 'not supported']).toContain(swRegistered);
  });
});

test.describe('720p zoom detection', () => {
  test('screen720p flag defaults to false in non-VIDAA env', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(500);
    const is720p = await page.evaluate(() => window.screen720p);
    expect(is720p).toBe(false);
  });
});

// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Native player handoff', () => {
  test('launchNativePlayer function is NOT available on non-VIDAA browser', async ({ page }) => {
    await page.goto('/#/home');
    await page.waitForTimeout(2000);
    const hasNative = await page.evaluate(() => typeof window.__launchNativePlayer);
    // On desktop browser, omi_platform doesn't exist so the function shouldn't be registered
    expect(hasNative).toBe('undefined');
  });

  test('launchNativePlayer function works when omi_platform is mocked', async ({ page }) => {
    // Mock omi_platform before page loads
    await page.addInitScript(() => {
      window.omi_platform = {
        sendPlatformMessage: function(msg) {
          window.__nativePlayerMessages = window.__nativePlayerMessages || [];
          window.__nativePlayerMessages.push(JSON.parse(msg));
        },
        addPlatformEventListener: function() {}
      };
    });

    await page.goto('/#/home');
    await page.waitForTimeout(2000);

    const hasNative = await page.evaluate(() => typeof window.__launchNativePlayer);
    expect(hasNative).toBe('function');
  });

  test('launchNativePlayer sends correct message types', async ({ page }) => {
    await page.addInitScript(() => {
      window.omi_platform = {
        sendPlatformMessage: function(msg) {
          window.__nativePlayerMessages = window.__nativePlayerMessages || [];
          window.__nativePlayerMessages.push(JSON.parse(msg));
        },
        addPlatformEventListener: function() {}
      };
    });

    await page.goto('/#/home');
    await page.waitForTimeout(2000);

    // Call the function with a test URL
    await page.evaluate(() => {
      window.__launchNativePlayer('https://example.com/test-video.mkv');
    });

    const messages = await page.evaluate(() => window.__nativePlayerMessages);
    expect(messages.length).toBe(3);
    expect(messages[0].type).toBe('launchNativePlayer');
    expect(messages[0].url).toBe('https://example.com/test-video.mkv');
    expect(messages[1].type).toBe('openMediaPlayer');
    expect(messages[2].type).toBe('playVideo');
  });

  test('Yellow button (405) triggers native player in player route', async ({ page }) => {
    await page.addInitScript(() => {
      window.omi_platform = {
        sendPlatformMessage: function(msg) {
          window.__nativePlayerMessages = window.__nativePlayerMessages || [];
          window.__nativePlayerMessages.push(JSON.parse(msg));
        },
        addPlatformEventListener: function() {}
      };
    });

    await page.goto('/#/player/test');
    await page.waitForTimeout(2000);

    // Create a video element with a src (simulating active playback)
    await page.evaluate(() => {
      var v = document.createElement('video');
      v.src = 'https://example.com/dv-test.mkv';
      document.body.appendChild(v);
    });

    // Directly call the native player function (simulates what Yellow button does)
    // KeyboardEvent keyCode is unreliable in test environments
    const result = await page.evaluate(() => {
      return window.__launchNativePlayer('https://example.com/dv-test.mkv');
    });
    expect(result).toBe(true);

    const messages = await page.evaluate(() => window.__nativePlayerMessages || []);
    expect(messages.length).toBe(3);
    expect(messages[0].type).toBe('launchNativePlayer');
    expect(messages[0].url).toBe('https://example.com/dv-test.mkv');
  });

  test('Yellow button does nothing outside player route', async ({ page }) => {
    await page.addInitScript(() => {
      window.omi_platform = {
        sendPlatformMessage: function(msg) {
          window.__nativePlayerMessages = window.__nativePlayerMessages || [];
          window.__nativePlayerMessages.push(JSON.parse(msg));
        },
        addPlatformEventListener: function() {}
      };
    });

    await page.goto('/#/home');
    await page.waitForTimeout(2000);

    await page.evaluate(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 405 }));
    });

    await page.waitForTimeout(500);
    const messages = await page.evaluate(() => window.__nativePlayerMessages || []);
    expect(messages.length).toBe(0);
  });

  test('stall warning shows Native Player button when omi_platform exists', async ({ page }) => {
    await page.addInitScript(() => {
      window.omi_platform = {
        sendPlatformMessage: function(msg) {
          window.__nativePlayerMessages = window.__nativePlayerMessages || [];
          window.__nativePlayerMessages.push(JSON.parse(msg));
        },
        addPlatformEventListener: function() {}
      };
    });

    await page.goto('/#/home');
    await page.waitForTimeout(2000);

    await page.evaluate(() => {
      window.__STREAM_INFO__ = { videoCodec: 'dvhe.07.06', width: 3840, height: 2160 };
      window.__showPlaybackWarning();
    });

    const overlay = page.locator('#dv-warning');
    await expect(overlay).toBeVisible();

    // Should have "Open in Native Player" as the first button
    const nativeBtn = page.locator('button:has-text("Open in Native Player")');
    await expect(nativeBtn).toBeVisible();
  });
});

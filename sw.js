var CACHE_NAME = 'stremio-vidaa-v9';
var ASSETS = [
  './',
  './index.html',
  './runtime.js',
  './main.js',
  './service.js',
  './webOSTV.js',
  './v5-worker.js',
  './stremio_core_web_bg.wasm',
  './core.chunk.js',
  './home.chunk.js',
  './discover.chunk.js',
  './search.chunk.js',
  './player.chunk.js',
  './video.chunk.js',
  './details.chunk.js',
  './library.chunk.js',
  './login.chunk.js',
  './settings.chunk.js',
  './addons.chunk.js',
  './logo.png',
  './icon.png',
  './PlusJakartaSans.ttf'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(ASSETS);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(names) {
      return Promise.all(
        names.filter(function(n) { return n !== CACHE_NAME; })
             .map(function(n) { return caches.delete(n); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  if (req.url.indexOf(self.location.origin) !== 0) return;

  // Never touch media range requests. If we ever served video from the
  // same origin and this handler intercepted, Range semantics break and
  // seeking stops working. Defensive skip regardless of origin.
  if (req.headers && req.headers.get('range')) return;
  if (/\.(mkv|mp4|m4v|webm|m3u8|ts|mpd|mov)(\?|$)/i.test(req.url)) return;

  // Only construct normalized request when query string is present
  var normalizedRequest = req;
  if (req.url.indexOf('?') !== -1) {
    var url = new URL(req.url);
    url.search = '';
    normalizedRequest = new Request(url.toString());
  }

  function updateCacheFromNetwork() {
    return fetch(req).then(function(response) {
      if (response && response.status === 200) {
        var clone = response.clone();
        caches.open(CACHE_NAME).then(function(cache) {
          cache.put(normalizedRequest, clone);
        });
      }
      return response;
    });
  }

  var isAppShellRequest =
    req.mode === 'navigate' ||
    req.destination === 'document' ||
    req.destination === 'script' ||
    req.destination === 'worker' ||
    req.destination === 'font' ||
    req.url.endsWith('.html') ||
    req.url.endsWith('.js') ||
    req.url.endsWith('.wasm');

  if (isAppShellRequest) {
    e.respondWith(
      updateCacheFromNetwork().catch(function() {
        return caches.match(normalizedRequest);
      })
    );
    return;
  }

  e.respondWith(
    caches.match(normalizedRequest).then(function(cached) {
      var fetchPromise = updateCacheFromNetwork().catch(function() {
        return cached;
      });
      return cached || fetchPromise;
    })
  );
});

self.addEventListener('message', function(e) {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

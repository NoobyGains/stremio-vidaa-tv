var CACHE_NAME = 'stremio-vidaa-v6';
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
  var url = new URL(e.request.url);
  // Only cache same-origin app shell requests
  if (url.origin !== self.location.origin) return;
  // Skip non-GET
  if (e.request.method !== 'GET') return;

  e.respondWith(
    caches.match(e.request).then(function(cached) {
      // Serve from cache, update in background (stale-while-revalidate)
      var fetchPromise = fetch(e.request).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(e.request, clone);
          });
        }
        return response;
      }).catch(function() {
        return cached;
      });
      return cached || fetchPromise;
    })
  );
});

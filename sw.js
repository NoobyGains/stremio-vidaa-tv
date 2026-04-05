var CACHE_NAME = 'stremio-vidaa-v7';
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

  // Only construct normalized request when query string is present
  var normalizedRequest = req;
  if (req.url.indexOf('?') !== -1) {
    var url = new URL(req.url);
    url.search = '';
    normalizedRequest = new Request(url.toString());
  }

  e.respondWith(
    caches.match(normalizedRequest).then(function(cached) {
      var fetchPromise = fetch(req).then(function(response) {
        if (response && response.status === 200) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) {
            cache.put(normalizedRequest, clone);
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

self.addEventListener('message', function(e) {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

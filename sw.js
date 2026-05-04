/* Portfolio offline/cache — bump VERSION after deploy when assets change meaningfully. */
'use strict';

var VERSION = '2026-05-05-v3';
var CACHE_NAME = 'lp-portfolio-' + VERSION;
var ORIGIN = self.location.origin;

function baseDir() {
  var p = self.location.pathname || '/';
  if (p.endsWith('/sw.js')) return p.slice(0, -5);
  if (p.endsWith('sw.js')) return p.slice(0, -6) || '/';
  return p.replace(/\/?sw\.js$/, '/') || '/';
}

var BASE = baseDir();
if (BASE.charAt(0) !== '/') BASE = '/' + BASE;
if (!BASE.endsWith('/')) BASE += '/';

function abs(path) {
  var rel = String(path || '').replace(/^\//, '');
  return ORIGIN + BASE + rel;
}

var PRECACHE_URLS = [
  abs('css/site.css'),
  abs('js/i18n.js'),
  abs('favicon.svg'),
  abs('site.webmanifest'),
  abs('llms.txt'),
  abs('robots.txt'),
  abs('sitemap.xml'),
];

self.addEventListener('install', function (event) {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(
        PRECACHE_URLS.map(function (u) {
          return new Request(u, { cache: 'reload', credentials: 'same-origin' });
        })
      );
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches
      .keys()
      .then(function (keys) {
        return Promise.all(
          keys.map(function (key) {
            if (key !== CACHE_NAME && key.indexOf('lp-portfolio-') === 0) {
              return caches.delete(key);
            }
          })
        );
      })
      .then(function () {
        return self.clients.claim();
      })
  );
});

function sameOrigin(url) {
  try {
    return new URL(url).origin === ORIGIN;
  } catch (e) {
    return false;
  }
}

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET' || !sameOrigin(req.url)) return;

  var accept = req.headers.get('accept') || '';
  var isDocument = req.mode === 'navigate' || accept.indexOf('text/html') !== -1;

  if (isDocument) {
    event.respondWith(
      fetch(req)
        .then(function (res) {
          if (res && res.ok) {
            var copy = res.clone();
            caches.open(CACHE_NAME).then(function (cache) {
              cache.put(req, copy);
            });
          }
          return res;
        })
        .catch(function () {
          return caches.match(req).then(function (hit) {
            if (hit) return hit;
            return caches.match(abs('index.html')).then(function (h2) {
              return h2 || caches.match(abs(''));
            });
          });
        })
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(function (cached) {
      var network = fetch(req).then(function (res) {
        if (res && res.ok && res.type === 'basic') {
          var copy = res.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(req, copy);
          });
        }
        return res;
      });
      return cached || network;
    })
  );
});

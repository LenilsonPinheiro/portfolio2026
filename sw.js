/* Portfolio offline/cache — bump VERSION after deploy when assets change meaningfully. */
'use strict';

var VERSION = '2026-05-06-v22-full-sync';
var CACHE_NAME = 'lp-portfolio-' + VERSION;
var ORIGIN = self.location.origin;

/** Directory containing sw.js, always with trailing slash (e.g. /portfolio2026/) */
function baseDir() {
  var p = self.location.pathname || '/';
  var noSw = p.replace(/\/?sw\.js$/i, '');
  if (!noSw || noSw === '/') return '/';
  return noSw.endsWith('/') ? noSw : noSw + '/';
}

var BASE = baseDir();

function abs(path) {
  var rel = String(path || '').replace(/^\//, '');
  if (BASE === '/') return ORIGIN + '/' + rel;
  var base = BASE.endsWith('/') ? BASE : BASE + '/';
  return ORIGIN + base + rel;
}

var PRECACHE_URLS = [
  abs('index.html'),
  abs('privacy.html'),
  abs('terms.html'),
  abs('img/favicon-16.png'),
  abs('img/favicon-32.png'),
  abs('img/favicon-48.png'),
  abs('img/icon-192.png'),
  abs('img/icon-512.png'),
  abs('css/site.css'),
  abs('js/i18n.js'),
  abs('js/theme.js'),
  abs('js/contact-endpoint.js'),
  abs('js/contact-form.js'),
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
      return Promise.all(
        PRECACHE_URLS.map(function (u) {
          return cache
            .add(new Request(u, { cache: 'reload', credentials: 'same-origin' }))
            .catch(function () {
              return cache.add(u).catch(function () {});
            });
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

function isNavigationRequest(req) {
  if (req.mode === 'navigate') return true;
  if (req.destination === 'document') return true;
  var accept = req.headers.get('accept') || '';
  return accept.indexOf('text/html') !== -1 && req.headers.get('sec-fetch-dest') === 'document';
}

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET' || !sameOrigin(req.url)) return;

  if (isNavigationRequest(req)) {
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

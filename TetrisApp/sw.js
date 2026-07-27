const CACHE_NAME = 'pwa-game-cache-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// 安裝時快取核心檔案
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// 攔截網路請求並支援離線讀取
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

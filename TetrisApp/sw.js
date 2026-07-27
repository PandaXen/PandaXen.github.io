const CACHE_NAME = 'tetris-pwa-v1';
const assetsToCache = [
    './index.html',
    './style.css',
    './script.js',
    './manifest.json'
];

// 安裝 Service Worker 並快取檔案
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(assetsToCache);
            })
    );
});

// 快取攔截與回應
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                return response || fetch(event.request);
            })
    );
});

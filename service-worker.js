const CACHE_NAME = 'site-static-v1';
const assets = [
  '/',
  '/html/index.html',
  '/css/style.css',
  '/javascript/script.js'
];

// Install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching shell assets');
        return cache.addAll(assets);
      })
  );
});

// Activate event
self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      // Remove old caches
      return Promise.all(keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request).catch(() => {
        // Fallback page, e.g., for offline use
        if (evt.request.mode === 'navigate') {
          return caches.match('/offline.html');
        }
      });
    })
  );
});

const CACHE_NAME = 'site-static-v1';
const assets = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  
];

// Install event
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// Activate event
self.addEventListener('activate', evt => {
  // code to remove old caches
});

// Fetch event
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cacheRes => {
      return cacheRes || fetch(evt.request);
    })
  );
});

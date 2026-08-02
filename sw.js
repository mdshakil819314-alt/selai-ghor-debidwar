const CACHE_NAME = 'selai-ghor-v1';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  self.clients.claim();
});

// শুধু installable হওয়ার জন্য একটা basic fetch হ্যান্ডলার — নেটওয়ার্ক থেকেই সবসময় লোড হবে
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

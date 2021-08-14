// Choose a cache name
const cacheName = 'nextntp_v1.0.0';
// List the files to precache
const precacheResources = [
    './', './index.html', 
    './nextntp.min.css', 
    './nextntp.min.js', 
    './nextntp.svg',
    './nextntpbg_d.svg',
    './nextntpbg.svg',
    './nextntpd.svg',
    './nextntpl.svg'
];

// When the service worker is installing, open the cache and add the precache resources to it
self.addEventListener('install', (event) => {
    console.log('Service worker install event!');
    event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(precacheResources)));
});

self.addEventListener('activate', (event) => {
    console.log('Service worker activate event!');
});

// When there's an incoming fetch request, try and respond with a precached resource, otherwise fall back to the network
self.addEventListener('fetch', (e) => {
    console.log('Fetch intercepted for:', e.request.url);
    e.respondWith((async function() {
        const cachedResponse = await caches.match(e.request);
        if (cachedResponse) {
          return cachedResponse;
        }
    
        const networkResponse = await fetch(e.request);
    
        const hosts = [
          'https://lh3.googleusercontent.com/proxy',
          'https://logos.kiwibrowser.com'
        ];
    
        if (hosts.some((host) => e.request.url.startsWith(host))) {
          // This clone() happens before `return networkResponse` 
          const clonedResponse = networkResponse.clone();
    
          e.waitUntil((async function() {
            const cache = await caches.open(CACHE_NAME);
            // This will be called after `return networkResponse`
            // so make sure you already have the clone!
            await cache.put(e.request, clonedResponse);
          })());
        }
    
        return networkResponse;
      })());
});
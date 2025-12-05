const CACHE_NAME = 'boldtribe-v1';
const urlsToCache = [
  '/',
  '/Crayon.gif',
  '/team/Boldtribe logo logo.svg',
  '/favicon.ico',
  'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap'
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache).catch((err) => {
          console.log('Cache addAll error:', err);
        });
      })
  );
  self.skipWaiting();
});

// Fetch event - skip caching for development files
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip caching for Vite dev server files
  if (url.pathname.includes('/@vite') || 
      url.pathname.includes('/@react-refresh') ||
      url.pathname.includes('.tsx') ||
      url.pathname.includes('.ts') ||
      url.pathname.includes('node_modules')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
      .catch((err) => {
        console.log('Fetch error:', err);
        return fetch(event.request);
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

const version = 'v1'
const assets = [
    "/",
    "/offline",
    "/css/style.css",
]


// INSTALL
self.addEventListener('install', event => {
    console.log('Installing service worker')
    event.waitUntil(
        caches.open(version).then(function (cache) {
            return cache.addAll(assets).then(() => self.skipWaiting());
        })
    );
});

// ACTIVATE
self.addEventListener('activate', event => {
    console.log('Activating service worker')
    event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (evt) => {
    // interupt the request before it goes to the server
    evt.respondWith(
        // get assets from cache (otherwise make the fetch from the server)
        caches.match(evt.request).then((cacheRes) => {
            return (
                cacheRes ||
                fetch(evt.request)
                .then((fetchRes) => {
                    return caches.open(version).then((cache) => {
                        cache.put(evt.request.url, fetchRes.clone());
                        return fetchRes;
                    });
                })
                .catch(() => caches.match("/offline"))
            );
        })
    );
});
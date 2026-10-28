// Makes the page installable as an app. Deliberately caches nothing: the fleet
// must always come live from the server, and a stale copy of the page would
// hide fixes. Requests simply go to the network.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

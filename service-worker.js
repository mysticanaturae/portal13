self.addEventListener('install', event => {
  console.log("Service Worker installed");
});

self.addEventListener('fetch', event => {
  // lahko dodamo cache za offline delovanje
});
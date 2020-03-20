importScripts("precache-manifest.f00e062923d9e89b9aa28596a71aaca8.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

let notificationUrl = '';

// self.addEventListener('push', event => {
//  const data = event.data.json();
//  self.registration.showNotification(data.title, { ...data.options });
// });

self.addEventListener('push', function(event) {
  console.log('Push received: ', event);
  let _data = event.data ? JSON.parse(event.data.text()) : {};
  notificationUrl = _data.url;
  event.waitUntil(
    self.registration.showNotification(_data.title, {
      body: _data.message,
      icon: _data.icon,
      tag: _data.tag
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({
      type: "window"
    })
    .then(function(clientList) {
      if (clients.openWindow) {
        return clients.openWindow(notificationUrl);
      }
    })
  );
});


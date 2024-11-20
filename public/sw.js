// sw.js
self.addEventListener('push', function (event) {
  const data = event.data ? event.data.json() : {}
  const title = data.title || 'Notificación'
  const options = {
    body: data.body || 'Tienes un nuevo mensaje.',
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

// self.addEventListener('notificationclick', function (event) {
//   console.log('Notification click received.')
//   event.notification.close()
//   event.waitUntil(clients.openWindow('<https://your-website.com>'))
// })

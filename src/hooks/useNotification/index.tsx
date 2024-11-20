import { useEffect } from 'react'

export const useNotification = () => {
  const notify = (message: string) => {
    // TODO: alternar entre audio o serviceWorker segun compatibilidad
    const audio = new Audio('/sound.mp3')
    audio.play()
    navigator.serviceWorker?.ready.then(function (registration) {
      registration.showNotification(message).catch((error) => {
        console.error('Error al mostrar la notificación:', error)
      })
    })
  }

  useEffect(() => {
    if (Notification.permission !== 'granted') Notification.requestPermission()

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(function (registration) {
          console.log('Service Worker registrado con éxito:', registration)
        })
        .catch(function (error) {
          console.error('Error al registrar el Service Worker:', error)
        })
    }
  }, [])

  return {
    notify,
  }
}

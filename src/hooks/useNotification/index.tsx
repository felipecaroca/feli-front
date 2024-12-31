'use client'

import { useEffect, useState } from 'react'
import { toaster } from '@/components/ui/toaster'
import { NOTIFICATIONS } from './notifications'
import { AttentionStatusEnum } from '@/commons'

export const useNotification = () => {
  const [isServiceWorkerCompatible, setIsServiceWorkerCompatible] =
    useState<boolean>(false)

  const playSound = () => {
    const audio = new Audio('/sound.mp3')
    audio.play()
  }

  const notify = (message: AttentionStatusEnum, audioAccepted: boolean) => {
    const notification = NOTIFICATIONS[message.toString()]

    if (!notification) return

    if (audioAccepted) {
      playSound()
      toaster.create(notification)
    } else if (isServiceWorkerCompatible)
      navigator.serviceWorker?.ready.then(function (registration) {
        registration
          .showNotification(notification.description)
          .catch((error) => {
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
          setIsServiceWorkerCompatible(true)
        })
        .catch(function (error) {
          console.error('Error al registrar el Service Worker:', error)
        })
    }
  }, [])

  return {
    notify,
    playSound,
    isServiceWorkerCompatible,
  }
}

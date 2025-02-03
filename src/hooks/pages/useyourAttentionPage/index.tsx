'use client'

import { AttentionModel } from '@/commons'
import {
  useAttentionIdParam,
  useAttentionsCRUD,
  useNotification,
  useSocket,
} from '@/hooks'
import { useOrganizationParam } from '@/hooks/useOrganizationParam'
import { useEffect, useState } from 'react'
import { Socket } from 'socket.io-client'

export const useYourAttentionPage = () => {
  const [attention, setAttention] = useState<AttentionModel | undefined>()
  const [socket, setSocket] = useState<Socket | undefined>()
  const { organization } = useOrganizationParam()
  const { attentionId } = useAttentionIdParam()
  const [audioAccepted, setAudioAccepted] = useState<boolean>(false)
  const { getAttention, gettingOne } = useAttentionsCRUD()
  const { connectSocket } = useSocket(true)
  const { notify, playSound, isServiceWorkerCompatible } = useNotification()

  const acceptAudio = () => {
    setAudioAccepted(true)
    playSound()
  }

  useEffect(() => {
    if (organization && attentionId)
      getAttention(organization, attentionId).then((myAttention) => {
        if (!myAttention) return
        if (socket) socket.close()

        setAttention(myAttention)

        const newSocket = connectSocket({ attentionId: myAttention.id })

        newSocket.on('message', (attention: AttentionModel) => {
          setAttention(attention)
          notify(attention.status, audioAccepted)
        })

        setSocket(newSocket)
      })
  }, [organization, attentionId])

  useEffect(() => {
    if (audioAccepted && attention) {
      if (socket) socket.close()

      const newSocket = connectSocket({ attentionId: attention.id })

      newSocket.on('message', (attention: AttentionModel) => {
        setAttention(attention)
        notify(attention.status, audioAccepted)
      })

      setSocket(newSocket)
    }
  }, [audioAccepted])

  return {
    attention,
    loading: gettingOne,
    acceptAudio,
    audioAccepted,
    isServiceWorkerCompatible,
  }
}

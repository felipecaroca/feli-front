'use client'

import {
  AttentionModel,
  WithAttentionParam,
  WithOrganizationParam,
} from '@/commons'
import {
  useAttentionIdParam,
  useAttentionsCRUD,
  useNotification,
  useSocket,
} from '@/hooks'
import { useOrganizationParam } from '@/hooks/useOrganizationParam'
import { useEffect, useState } from 'react'

export const useYourAttentionPage = (
  props: WithOrganizationParam & WithAttentionParam
) => {
  const [attention, setAttention] = useState<AttentionModel | undefined>()
  const { organization } = useOrganizationParam(props)
  const { attentionId } = useAttentionIdParam(props)
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
      getAttention(organization, attentionId).then((myAttention) =>
        setAttention(myAttention)
      )
  }, [organization, attentionId])

  useEffect(() => {
    if (attention) {
      const socket = connectSocket({ attentionId: attention.id })

      socket.on('message', (attention: AttentionModel) => {
        setAttention(attention)
        notify(attention.status, audioAccepted)
      })
    }
  }, [attention, audioAccepted])

  return {
    attention,
    loading: gettingOne,
    acceptAudio,
    audioAccepted,
    isServiceWorkerCompatible,
  }
}

'use client'

import {
  AttentionModel,
  AttentionStatusEnum,
  organizationAtom,
} from '@/commons'
import { useAttentionsCRUD, useSocket } from '@/hooks'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

export const useAttentionViewPage = () => {
  const currentOrganization = useAtomValue(organizationAtom)
  const organizationId = currentOrganization?.id || ''
  const { getAttentions, getting } = useAttentionsCRUD()
  const [attentions, setAttentions] = useState<AttentionModel[]>([])
  const { socket } = useSocket()

  useEffect(() => {
    if (organizationId)
      getAttentions(organizationId).then((attentionsFound) =>
        setAttentions(attentionsFound || [])
      )
  }, [organizationId])

  useEffect(() => {
    if (socket && organizationId) {
      socket.on(`${organizationId}-attentions`, (data: AttentionModel) => {
        setAttentions((prev) => [...prev.filter((i) => i.id !== data.id), data])
      })

      socket.on(`${organizationId}-attentions-reset`, (moduleId) => {
        console.log({ moduleId })
        setAttentions((prev) =>
          moduleId
            ? prev.filter((attention) => attention.moduleId !== moduleId)
            : []
        )
      })
    }
  }, [socket, organizationId])

  return {
    waitting: attentions.filter(
      (attention) => attention.status === AttentionStatusEnum.WAITING
    ),
    attending: attentions.filter(
      (attention) => attention.status === AttentionStatusEnum.ATTENDING
    ),
    getting,
  }
}

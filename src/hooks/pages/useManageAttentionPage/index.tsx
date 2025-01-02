'use client'

import { AttentionModel, organizationAtom } from '@/commons'
import { useSocket, useManageAttention } from '@/hooks'
import { useAtomValue } from 'jotai'
import { useEffect } from 'react'

export const useManageAttentionPage = () => {
  const currentOrganization = useAtomValue(organizationAtom)
  const organizationId = currentOrganization?.id || ''
  const { socket } = useSocket()

  const {
    setAttentions,
    attentions,
    noAttentionsAvailable,
    currentAttention,
    confirmationContent,
    onCloseConfirmation,
    onConfirm,
    onCall,
    onOk,
    onSkip,
    onNext,
    onReset,
    getting,
    resetting,
    changing,
    calling,
  } = useManageAttention({ organization: organizationId })

  useEffect(() => {
    if (socket && organizationId)
      socket.on(`${organizationId}-attentions`, (data: AttentionModel) => {
        setAttentions((prev) => [...prev.filter((i) => i.id !== data.id), data])
      })
  }, [socket, organizationId])

  return {
    attentions,
    noAttentionsAvailable,
    currentAttention,
    confirmationContent,
    onCloseConfirmation,
    onConfirm,
    onCall,
    onOk,
    onSkip,
    onNext,
    onReset,
    getting,
    resetting,
    changing,
    calling,
  }
}

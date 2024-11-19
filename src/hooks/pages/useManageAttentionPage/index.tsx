import {
  AttentionModel,
  WithModuleParam,
  WithOrganizationParam,
} from '@/commons'
import { useOrganizationParam, useSocket, useManageAttention } from '@/hooks'
import { useEffect } from 'react'

export const useManageAttentionPage = (
  props: WithModuleParam & WithOrganizationParam
) => {
  const { organization } = useOrganizationParam(props)
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
  } = useManageAttention({ organization })

  useEffect(() => {
    if (socket && organization)
      socket.on(`${organization}-attentions`, (data: AttentionModel) => {
        setAttentions((prev) => [...prev.filter((i) => i.id !== data.id), data])
      })
  }, [socket, organization])

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

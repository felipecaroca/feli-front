import {
  AttentionModel,
  WithModuleParam,
  WithOrganizationParam,
} from '@/commons'
import {
  useOrganizationParam,
  useModuleIdParam,
  useManageAttention,
  useSocket,
} from '@/hooks'
import { useEffect } from 'react'

export const useManageModuleAttentionPage = (
  props: WithModuleParam & WithOrganizationParam
) => {
  const { organization } = useOrganizationParam(props)
  const { moduleId } = useModuleIdParam(props)
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
  } = useManageAttention({ organization, moduleId })

  useEffect(() => {
    if (socket && organization && moduleId)
      socket.on(
        `${organization}-attentions-${moduleId}`,
        (data: AttentionModel) => {
          setAttentions((prev) => [
            ...prev.filter((i) => i.id !== data.id),
            data,
          ])
        }
      )
  }, [socket, organization, moduleId])

  return {
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
  }
}

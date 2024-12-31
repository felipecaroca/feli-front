'use client'

import {
  AttentionModel,
  ModuleModel,
  WithModuleParam,
  WithOrganizationParam,
} from '@/commons'
import {
  useOrganizationParam,
  useModuleIdParam,
  useManageAttention,
  useSocket,
  useModulesCRUD,
} from '@/hooks'
import { useEffect, useState } from 'react'

export const useManageModuleAttentionPage = (
  props: WithModuleParam & WithOrganizationParam
) => {
  const [module, setModule] = useState<ModuleModel | undefined>()
  const { organization } = useOrganizationParam(props)
  const { moduleId } = useModuleIdParam(props)
  const { getModule } = useModulesCRUD()
  const { socket } = useSocket()

  useEffect(() => {
    if (moduleId && organization)
      getModule(organization, moduleId).then((res) => setModule(res))
  }, [organization, moduleId])

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
    module,
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

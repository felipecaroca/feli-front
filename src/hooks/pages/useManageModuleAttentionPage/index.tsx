'use client'

import {
  AttentionModel,
  ModuleModel,
  organizationAtom,
  WithModuleParam,
} from '@/commons'
import {
  useModuleIdParam,
  useManageAttention,
  useSocket,
  useModulesCRUD,
} from '@/hooks'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

export const useManageModuleAttentionPage = (props: WithModuleParam) => {
  const [module, setModule] = useState<ModuleModel | undefined>()
  const currentOrganization = useAtomValue(organizationAtom)
  const { moduleId } = useModuleIdParam(props)
  const { getModule } = useModulesCRUD()
  const { socket } = useSocket()
  const organizationId = currentOrganization?.id || ''

  useEffect(() => {
    if (moduleId && organizationId)
      getModule(organizationId, moduleId).then((res) => setModule(res))
  }, [organizationId, moduleId])

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
  } = useManageAttention({ organization: organizationId, moduleId })

  useEffect(() => {
    if (socket && organizationId && moduleId)
      socket.on(
        `${organizationId}-attentions-${moduleId}`,
        (data: AttentionModel) => {
          setAttentions((prev) => [
            ...prev.filter((i) => i.id !== data.id),
            data,
          ])
        }
      )
  }, [socket, organizationId, moduleId])

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

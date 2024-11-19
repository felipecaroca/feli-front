import {
  AttentionModel,
  AttentionStatusEnum,
  ConfirmActionType,
  ConfirmationType,
  getConfirmationContent,
  getNextOnList,
} from '@/commons'
import { useAttentionsCRUD } from '@/hooks'

import { useEffect, useState } from 'react'
import { HookProps } from './types'

export const useManageAttention = ({ organization, moduleId }: HookProps) => {
  const [attentions, setAttentions] = useState<AttentionModel[]>([])
  const [confirmationContent, setConfirmationContent] = useState<
    ConfirmationType<ConfirmActionType> | undefined
  >()

  const currentAttention = attentions?.find(
    (attention) => attention.status === AttentionStatusEnum.ATTENDING
  )

  const {
    getAttentions,
    resetAttention,
    chanAttentionStatus,
    callAttention,
    getting,
    resetting,
    changing,
    calling,
  } = useAttentionsCRUD()

  const onCall = (attention?: AttentionModel) => {
    if (attention) callAttention(attention)
  }

  const onOk = async (attention?: AttentionModel) => {
    if (attention) chanAttentionStatus(attention, AttentionStatusEnum.OK)
  }

  const onSkip = () => setConfirmationContent(getConfirmationContent('skip'))

  const next = async (nextAttention: AttentionModel) =>
    chanAttentionStatus(nextAttention, AttentionStatusEnum.ATTENDING)

  const skip = async () => {
    if (!currentAttention) return

    await chanAttentionStatus(currentAttention, AttentionStatusEnum.SKIPPED)

    const nextAttention = getNextOnList(waitingList)

    if (nextAttention)
      await chanAttentionStatus(nextAttention, AttentionStatusEnum.ATTENDING)

    onCloseConfirmation()
  }

  const onNext = () => {
    const nextAttention = getNextOnList(waitingList)

    if (!currentAttention) {
      if (nextAttention) next(nextAttention)
    } else setConfirmationContent(getConfirmationContent('skip'))
  }

  const onCloseConfirmation = () => setConfirmationContent(undefined)

  const reset = async () => {
    if (await resetAttention(organization, moduleId)) {
      setAttentions((await getAttentions(organization, moduleId)) || [])
      onCloseConfirmation()
    }
  }

  const onReset = async () =>
    setConfirmationContent(getConfirmationContent('reset'))

  const waitingList = attentions?.filter(
    (attention) => attention.status === AttentionStatusEnum.WAITING
  )
  const noAttentionsAvailable = waitingList?.length === 0

  const onConfirm = (action?: ConfirmActionType) => {
    if (!action) return

    const functions = { reset, skip }
    functions[action]()
  }

  useEffect(() => {
    if (organization)
      getAttentions(organization, moduleId).then((attentionsFound) =>
        setAttentions(attentionsFound || [])
      )
  }, [organization])

  return {
    setAttentions,
    attentions: waitingList,
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

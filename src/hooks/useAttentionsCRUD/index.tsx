import {
  AttentionModel,
  AttentionStatusEnum,
  callAttentionService,
  changeAttentionStatusService,
  getAttentionsService,
  resetAttentionService,
} from '@/commons'
import { useLoading } from '../useLoading'

export const useAttentionsCRUD = () => {
  const { call: callGet, loading: getting } = useLoading()
  const { call: callReset, loading: resetting } = useLoading()
  const { call: callChange, loading: changing } = useLoading()
  const { call: callCallAttention, loading: calling } = useLoading()

  const getAttentions = (business: string, moduleId?: string) =>
    callGet(
      () => getAttentionsService(business, moduleId),
      () => [] as AttentionModel[]
    )

  const resetAttention = (business: string, moduleId?: string) =>
    callReset(
      () => resetAttentionService(business, moduleId),
      () => false
    )

  const chanAttentionStatus = (
    attention: AttentionModel,
    status: AttentionStatusEnum
  ) =>
    callChange(
      () =>
        changeAttentionStatusService(attention.business, attention.id, {
          status,
        }),
      () => undefined
    )

  const callAttention = (attention: AttentionModel) =>
    callCallAttention(
      () => callAttentionService(attention.business, attention.id),
      () => false
    )

  return {
    getAttentions,
    resetAttention,
    chanAttentionStatus,
    callAttention,
    getting,
    resetting,
    changing,
    calling,
  }
}

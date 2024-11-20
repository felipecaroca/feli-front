import {
  AttentionModel,
  AttentionStatusEnum,
  callAttentionService,
  changeAttentionStatusService,
  CreateAttentionInput,
  createAttentionService,
  getAttentionService,
  getAttentionsService,
  resetAttentionService,
} from '@/commons'
import { useLoading } from '../useLoading'

export const useAttentionsCRUD = () => {
  const { call: callGet, loading: getting } = useLoading()
  const { call: callReset, loading: resetting } = useLoading()
  const { call: callChange, loading: changing } = useLoading()
  const { call: callCallAttention, loading: calling } = useLoading()
  const { call: callCreate, loading: creating } = useLoading()
  const { call: callGetOne, loading: gettingOne } = useLoading()

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

  const changeAttentionStatus = (
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

  const createAttention = (business: string, data: CreateAttentionInput) =>
    callCreate(
      () => createAttentionService(business, data),
      () => undefined
    )

  const getAttention = (business: string, attentionId: string) =>
    callGetOne(
      () => getAttentionService(business, attentionId),
      () => undefined
    )

  return {
    getAttentions,
    getAttention,
    resetAttention,
    changeAttentionStatus,
    callAttention,
    createAttention,
    getting,
    gettingOne,
    resetting,
    changing,
    calling,
    creating,
  }
}

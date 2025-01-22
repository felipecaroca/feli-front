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

  const getAttentions = (organizationId: string, moduleId?: string) =>
    callGet(
      () => getAttentionsService(organizationId, moduleId),
      () => [] as AttentionModel[]
    )

  const resetAttention = (organizationId: string, moduleId?: string) =>
    callReset(
      () => resetAttentionService(organizationId, moduleId),
      () => false
    )

  const changeAttentionStatus = (
    attention: AttentionModel,
    status: AttentionStatusEnum
  ) =>
    callChange(
      () =>
        changeAttentionStatusService(attention.organizationId, attention.id, {
          status,
        }),
      () => undefined
    )

  const callAttention = (attention: AttentionModel) =>
    callCallAttention(
      () => callAttentionService(attention.organizationId, attention.id),
      () => false
    )

  const createAttention = (
    organizationId: string,
    data: CreateAttentionInput
  ) =>
    callCreate(
      () => createAttentionService(organizationId, data),
      () => undefined
    )

  const getAttention = (organizationId: string, attentionId: string) =>
    callGetOne(
      () => getAttentionService(organizationId, attentionId),
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

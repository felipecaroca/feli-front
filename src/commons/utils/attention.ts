import { CONFIRMATION_CONTENTS, ATTENTION_STATUS } from '../constants'
import { AttentionModel, AttentionStatusEnum, ConfirmActionType } from '../types'

export const renderAttentionNumber = (attention?: AttentionModel) => `${attention?.module?.prefix || ''} ${attention?.number?.toString().padStart(4, '0') || ''}`

export const renderAttentionName = (attention?: AttentionModel) => `${attention? attention?.name || 'Sin nombre': ''}`

export const renderAttentionStatus = (attention?: AttentionModel) => attention?.status ? ATTENTION_STATUS[attention.status]:''

export const getConfirmationContent = (action: ConfirmActionType ) => CONFIRMATION_CONTENTS.find(
  (content) => content.action === action
)

export const getNextOnList = (attentions?: AttentionModel[]) =>  attentions?.find(
  (i) => i.status === AttentionStatusEnum.WAITING
)
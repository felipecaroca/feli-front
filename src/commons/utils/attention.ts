import { AttentionModel } from '../types'

export const renderAttentionNumber = (attention?: AttentionModel) => `${attention?.module?.prefix || ''} ${attention?.number?.toString().padStart(4, '0') || ''}`

export const renderAttentionName = (attention?: AttentionModel) => `${attention? attention?.name || 'Sin nombre': ''}`
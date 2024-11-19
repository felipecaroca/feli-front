import { AttentionStatusEnum, ModuleModel } from '@/commons'
import { BaseModel } from './base'

export type CreateAttentionInput = {
  name?: string
  moduleId?: string
}

export type ChangeStatusAttentionInput = {
  status: AttentionStatusEnum
}


export type AttentionModel = {
  number: number
  name?: string
  business: string

  moduleId?: string
  module?: ModuleModel

  status: AttentionStatusEnum
  active: boolean
} & BaseModel


export type ConfirmActionType =  'reset'| 'skip'
import { AttentionStatusEnum, ModuleModel } from '@/commons'
import { BaseModel } from './base'

export type AttentionModel = {
  number: number
  name?: string
  business: string

  moduleId?: string
  module?: ModuleModel

  status: AttentionStatusEnum
  active: boolean
} & BaseModel
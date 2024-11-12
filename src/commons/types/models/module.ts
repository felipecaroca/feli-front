import { BaseModel } from './base'

export type ModuleModel = {
  name: string
  prefix: string
  description: string
  business: string
} & BaseModel
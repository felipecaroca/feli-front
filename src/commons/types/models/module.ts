import { BaseModel } from './base'

export type CreateModInput = {
  name: string
  prefix: string
  description?: string
}


export type ModuleModel = {
  name: string
  prefix: string
  description: string
  business: string
} & BaseModel
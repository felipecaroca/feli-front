import { BaseModel } from './base'

export type SaveModInput = {
  name: string
  prefix: string
  description?: string
}


export type ModuleModel = {
  name: string
  prefix: string
  description: string
  organizationId: string
} & BaseModel
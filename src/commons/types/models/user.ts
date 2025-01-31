import { AppModel } from './app'
import { BaseModel } from './base'

export type User = {
  name: string
  email: string
  sub: string
  picture: string
  appIds: string[]
  apps: AppModel[]
  organizationIds: []
} & BaseModel
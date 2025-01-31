import { BaseModel } from './base'

export type FeatureModel = {
  title?: string
  items?: string
} & BaseModel

export type AppModel = {
  name: string
  img?: string
  permissions: string[]
  features?: FeatureModel[]
} & BaseModel
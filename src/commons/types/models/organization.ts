import { BaseModel } from './base'

export type CreateOrganizationInput = {
  name: string
}

export type UpdateOrganizationInput = {
  name?: string
  userEmails?: string[]
}


export type OrganizationModel = {
  name: string
} & BaseModel
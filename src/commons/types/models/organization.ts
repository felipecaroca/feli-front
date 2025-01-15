import { BaseModel } from './base'
import { ColaboratorInput } from './colaborator'

export type CreateOrganizationInput = {
  name: string
}

export type UpdateOrganizationInput = {
  name?: string
  colaborators?: ColaboratorInput[]
}


export type OrganizationModel = {
  name: string
} & BaseModel
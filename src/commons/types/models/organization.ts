import { BaseModel } from './base'
import { CollaboratorInput } from './collaborator'

export type CreateOrganizationInput = {
  name: string
}

export type UpdateOrganizationInput = {
  name?: string
  collaborators?: CollaboratorInput[]
}


export type OrganizationModel = {
  name: string
} & BaseModel
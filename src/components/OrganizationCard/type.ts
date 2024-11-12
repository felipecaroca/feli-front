import { OrganizationModel } from '@/commons'

export type ComponentProps = {
  organization: OrganizationModel
  onClick: (organization: OrganizationModel) => void
}
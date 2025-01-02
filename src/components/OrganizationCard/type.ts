import { OrganizationModel } from '@/commons'
import { CardRootProps } from '@chakra-ui/react'

export type ComponentProps = {
  organization: OrganizationModel
  onCardClick?(organization: OrganizationModel): void
  onDelete?():void
  onEdit?():void
  isCurrent?: boolean
} & CardRootProps
import { WithChildren } from '@/commons'
import { DialogOpenChangeDetails } from '@chakra-ui/react'

export type ComponentProps = {
  open: boolean
  onOpenChange:(details: DialogOpenChangeDetails)=>void
  onCancel:() => void
  onConfirm:() => void
  loading?: boolean
} & WithChildren
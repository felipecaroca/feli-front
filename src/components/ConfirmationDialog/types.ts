import { WithChildren } from '@/commons'
import { ModalType } from '@/commons/types/components'


export type ComponentProps = {
  onCancel:() => void
  onConfirm:() => void
  loading?: boolean
} & WithChildren & ModalType
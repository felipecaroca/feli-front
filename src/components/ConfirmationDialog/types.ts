import { WithChildren } from '@/commons'


export type ComponentProps = {
  onCancel:() => void
  onConfirm:() => void
  loading?: boolean
  open:boolean
} & WithChildren 
import { SaveModInput } from '@/commons'


export type ComponentProps = {
  onSubmit(values: SaveModInput): void
  open: boolean
  onClose():void
  saving: boolean
  defaultValues?: SaveModInput
  title?: string
}
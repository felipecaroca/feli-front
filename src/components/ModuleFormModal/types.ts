import { ModuleFormType } from '@/hooks'

export type ComponentProps = {
  onSubmit(values: ModuleFormType): void
  open: boolean
  onClose():void
  saving: boolean
  defaultValues?: ModuleFormType
  title?: string
}
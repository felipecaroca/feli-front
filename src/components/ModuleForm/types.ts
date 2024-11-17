import { ModuleFormType } from '@/hooks'

export type ComponentProps = {
  onSubmit(values: ModuleFormType):void
  loading?:boolean
  defaultValues?: ModuleFormType
}
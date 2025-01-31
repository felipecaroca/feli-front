import { ModuleModel, ClickOrModify } from '@/commons'


export type ComponentProps = {
  loading: boolean
  modules: ModuleModel[]
  onOpenNew?():void
} & ClickOrModify
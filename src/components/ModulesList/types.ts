import { ModuleModel } from '@/commons'
import { ClickOrModify } from '@/commons/types/components/card'

export type ComponentProps = {
  loading: boolean
  modules: ModuleModel[]
  onOpenNew?():void
} & ClickOrModify
import { ModuleModel } from '@/commons'

export type ComponentProps = {
  module: ModuleModel
  onDelete: (module: ModuleModel) => void
  onEdit: (module: ModuleModel) => void
}
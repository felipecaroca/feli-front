import { ModuleModel } from '../models'

type ModifyType = {
  onDelete(module: ModuleModel): void
  onEdit(module: ModuleModel): void
  onCardClick?: never
}

type ClickType = {
  onDelete?: never
  onEdit?: never
  onCardClick(module: ModuleModel): void
}

export type ClickOrModify = ModifyType | ClickType
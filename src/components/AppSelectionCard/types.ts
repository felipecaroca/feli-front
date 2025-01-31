import { AppModel } from '@/commons'

export type ComponentProps = {
  app: AppModel
  isSelected?: boolean
  onSeeMore(app: AppModel):void
  onSelect(app: AppModel):void
}
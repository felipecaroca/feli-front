import { AppModel } from "@/commons"

export type ComponentProps = {
  app: AppModel
  onSeeMore(app: AppModel):void
  onSelect(app: AppModel):void
}
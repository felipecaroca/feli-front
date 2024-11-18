import { AttentionModel } from '@/commons'

export type ComponentProps = {
  attention?:AttentionModel
  onCall(attention?:AttentionModel):void
  onOk(attention?:AttentionModel):void
  onSkip(attention?:AttentionModel):void
}
import { PixelOrPercent, WithChildren } from '@/commons'

export type ComponentProps = {
  width?: PixelOrPercent
  height?: PixelOrPercent
  onCardClick?():void
} & WithChildren
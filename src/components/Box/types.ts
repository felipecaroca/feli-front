import { PaddingPixels, PixelOrPercent, PositionType, WithChildren } from '@/commons'


export type ComponentProps = {
  width?: `${number}${'%' | 'px'}`,
  height?: `${number}${'%' | 'px'}`,
  padding?: PaddingPixels
  zIndex?: number
  position?: PositionType
  top?: PixelOrPercent
  onClick?():void
} & WithChildren
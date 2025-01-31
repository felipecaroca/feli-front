import { PaddingPixels, PixelOrPercent, WithChildren } from '@/commons'

export type ComponentProps = {
  padding?: PaddingPixels
  bottom?: PixelOrPercent
} & WithChildren
import { PaddingPixels, PixelOrPercent, WithChildren } from '@/commons'

type JustifyContentType = 'center' | 'start' | 'end' | 'space-between'
type WrapType = 'wrap' | 'nowrap' | 'wrap-reverse'

export type ComponentProps = {
  justify?: JustifyContentType
  width?: PixelOrPercent
  padding?: PaddingPixels
  wrap?: WrapType
} & WithChildren
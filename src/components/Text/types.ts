import { PixelOrPercent, WithChildren } from '@/commons'

export type ComponentProps = {
  fontWeight?: number
  fontSize?: `${number}px`
  lineHeight?: `${number}px`
  width?: PixelOrPercent
  textAlign?: 'start'|'center'|'end'
} & WithChildren
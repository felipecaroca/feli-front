import { PaddingPixels, WithChildren } from '@/commons'

type JustifyContentType = 'center' | 'start' | 'end' | 'space-between'

export type ComponentProps = {
  justify?: JustifyContentType
  width?: `${number}%`
  padding?: PaddingPixels
} & WithChildren
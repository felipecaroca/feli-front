import { SinglePixel, WithChildren } from '@/commons'

export type ComponentProps = {
  onClick(): void
  top?: SinglePixel
  right?: SinglePixel
  bottom?: SinglePixel
  left?: SinglePixel
  spanNum?: number
} & WithChildren
import { PaddingPixels, WithChildren } from '@/commons'


export type ComponentProps = {
  width?: `${number}${'%' | 'px'}`,
  height?: `${number}${'%' | 'px'}`,
  padding?: PaddingPixels
} & WithChildren
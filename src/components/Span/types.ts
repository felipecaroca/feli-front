import { WithChildren } from '@/commons'

export type ComponentProps = {
  fontWeight?: number
  fontSize?: `${number}px`
  lineHeight?: `${number}px`
} & WithChildren
import { VariantsType, WithChildren } from '@/commons'



export type ComponentProps = {
  variant?: VariantsType
  onClick():void
} & WithChildren
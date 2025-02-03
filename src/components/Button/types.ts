import { VariantsType, WithChildren } from '@/commons'



export type ComponentProps = {
  variant?: VariantsType
  onClick?<T>(ev?: T):void
  loading?: boolean
  disabled?: boolean
  type?: 'submit'|'button'|'reset'
} & WithChildren
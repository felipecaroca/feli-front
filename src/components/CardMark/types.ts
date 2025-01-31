import { SinglePixel, VariantsType } from '@/commons'

export type ComponentProps = {
  text: string
  width?: `${number}px`,
  top?: SinglePixel
  left?: `${number}${'px'|'%'}`
  variant?: VariantsType
}
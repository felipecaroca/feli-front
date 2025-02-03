import { FlexDirectionType } from '@/commons'

export type ComponentProps = {
  width: `${number}${'px' | '%'}`
  height: `${number}${'px' | '%'}`
  noOfLines?: number
  direction?: FlexDirectionType
}
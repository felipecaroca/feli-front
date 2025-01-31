import { FC } from 'react'
import { ComponentProps } from './types'

export const SpanComponent: FC<ComponentProps> = ({
  children,
  fontSize,
  fontWeight,
  lineHeight,
}) => {
  return <span style={{ fontSize, fontWeight, lineHeight }}>{children}</span>
}

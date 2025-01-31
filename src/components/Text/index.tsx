import { FC } from 'react'
import { ComponentProps } from './types'

export const TextComponent: FC<ComponentProps> = ({
  children,
  fontSize,
  fontWeight,
  lineHeight,
  textAlign,
  width,
}) => {
  return (
    <div
      style={{
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        width,
      }}
    >
      {children}
    </div>
  )
}

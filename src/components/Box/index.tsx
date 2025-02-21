import { FC } from 'react'
import { ComponentProps } from './types'

export const BoxComponent: FC<ComponentProps> = ({
  children,
  width,
  height,
  padding,
  zIndex,
  position,
  top,
}) => {
  return (
    <div
      style={{
        width,
        height,
        padding,
        zIndex,
        position,
        top,
      }}
    >
      {children}
    </div>
  )
}

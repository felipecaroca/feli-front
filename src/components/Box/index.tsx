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
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        width,
        height,
        padding,
        zIndex,
        position,
        top,
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {children}
    </div>
  )
}

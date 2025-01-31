import { FC } from 'react'
import style from './style.module.css'
import { ComponentProps } from './types'

export const FlexComponent: FC<ComponentProps> = ({
  children,
  justify,
  width,
  padding,
}) => {
  return (
    <div
      className={`${style.row} ${style[justify || 'center']}`}
      style={{ width, padding }}
    >
      {children}
    </div>
  )
}

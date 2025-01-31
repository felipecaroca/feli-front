import { FC } from 'react'
import style from './style.module.css'
import { ComponentProps } from './types'

export const FlexComponent: FC<ComponentProps> = ({
  children,
  justify,
  width,
  padding,
  wrap,
}) => {
  return (
    <div
      className={style.row}
      style={{ width, padding, flexWrap: wrap, justifyContent: justify }}
    >
      {children}
    </div>
  )
}

import { FC } from 'react'
import { WithChildren } from '@/commons'
import style from './style.module.css'

export const TitleComponent: FC<WithChildren> = ({ children, textAlign }) => {
  return (
    <div className={style.title} style={{ textAlign }}>
      {children}
    </div>
  )
}

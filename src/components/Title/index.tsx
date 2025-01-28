import { FC } from 'react'
import { WithChildren } from '@/commons'
import style from './style.module.css'

export const TitleComponent: FC<WithChildren> = ({ children }) => {
  return <div className={style.title}>{children}</div>
}

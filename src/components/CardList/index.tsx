import { FC } from 'react'
import style from './style.module.css'
import { WithChildren } from '@/commons'

export const CardListComponent: FC<WithChildren> = ({ children }) => {
  return <div className={style.row}>{children}</div>
}

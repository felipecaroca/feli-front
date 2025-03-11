import { FC } from 'react'
import { ComponentProps } from './types'
import styles from './styles.module.css'

export const CollapseComponent: FC<ComponentProps> = ({ children, open }) => {
  return (
    <div
      className={`${styles.collapse} ${open ? styles.visible : styles.hidden}`}
    >
      {children}
    </div>
  )
}

import { FC } from 'react'

import { ComponentProps } from './types'
import styles from './styles.module.css'
import { BiX } from 'react-icons/bi'

export const DrawerComponent: FC<ComponentProps> = ({
  onClose,
  children,
  open,
}) => {
  return (
    <div
      className={`${styles.drawer} ${open ? styles.drawerVisible : styles.drawerHiding}`}
      onClick={onClose}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <BiX />
        </button>
        {children}
      </div>
    </div>
  )
}

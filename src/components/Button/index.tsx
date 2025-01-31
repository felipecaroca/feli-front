import { FC } from 'react'
import { ComponentProps } from './types'
import styles from './styles.module.css'

export const ButtonComponent: FC<ComponentProps> = ({
  children,
  variant,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[variant || 'default']}`}
    >
      {children}
    </button>
  )
}

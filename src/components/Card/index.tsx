import { FC } from 'react'
import { ComponentProps } from './types'
import styles from './styles.module.css'

export const CardComponent: FC<ComponentProps> = ({
  children,
  width,
  height,
  onCardClick,
}) => {
  return (
    <div
      className={styles.card}
      style={{ width, height, cursor: onCardClick ? 'pointer' : 'default' }}
      onClick={onCardClick}
    >
      {children}
    </div>
  )
}

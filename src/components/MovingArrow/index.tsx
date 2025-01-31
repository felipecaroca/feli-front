import { FC } from 'react'
import styles from './styles.module.css'
import { ComponentProps } from './types'
export const MovingArrowComponent: FC<ComponentProps> = ({
  degrees,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <div
      className={styles.arrow}
      style={{
        top,
        left,
        right,
        bottom,
        transform: `rotate(${degrees || 0}deg)`,
      }}
    >
      <div className={styles.body} />
      <div className={styles.head} />
    </div>
  )
}

import { FC } from 'react'

import { ComponentProps } from './types'
import styles from './styles.module.css'

const CardMarkComponent: FC<ComponentProps> = ({
  text,
  top,
  left,
  width,
  variant,
}) => {
  return (
    <div
      className={`${styles.mark} ${styles[variant || 'default']}`}
      style={{ top, left, width }}
    >
      {text}
    </div>
  )
}

export default CardMarkComponent

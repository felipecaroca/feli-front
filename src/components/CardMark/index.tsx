import { FC } from 'react'

import { ComponentProps } from './types'
import styles from './styles.module.css'

const CardMarkComponent: FC<ComponentProps> = ({
  text,
  top,
  left,
  width,
  height,
  variant,
}) => {
  const wNum = parseInt(width)
  const hNum = parseInt(height)

  return (
    <div
      className={`${styles.mark} ${styles[variant || 'default']}`}
      style={{
        top,
        left,
        width,
        height,
        clipPath: `polygon(${hNum}px 0, ${wNum - hNum}px 0, 100% 100%, 0 100%)`,
      }}
    >
      {text}
    </div>
  )
}

export default CardMarkComponent

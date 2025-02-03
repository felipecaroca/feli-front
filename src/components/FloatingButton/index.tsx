import { FC } from 'react'
import { ComponentProps } from './types'
import styles from './styles.module.css'

export const FloatingButtonComponent: FC<ComponentProps> = ({
  children,
  onClick,
  top,
  left,
  right,
  bottom,
  spanNum,
}) => {
  const spanTop = top ? `${parseInt(top) - 15}px` : undefined
  const spanBottom = bottom ? `${parseInt(bottom) + 45}px` : undefined
  return (
    <>
      <button
        onClick={onClick}
        className={styles.floatingButton}
        style={{ top, right, bottom, left }}
      >
        {children}
      </button>
      {(spanNum || 0) > 0 && (
        <div
          className={styles.span}
          style={{
            top: spanTop,
            right: right,
            left: left,
            bottom: spanBottom,
          }}
        >
          {spanNum}
        </div>
      )}
    </>
  )
}

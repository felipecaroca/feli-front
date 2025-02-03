import { FC, useEffect, useRef } from 'react'

import { ComponentProps } from './types'
import styles from './styles.module.css'
import { BiX } from 'react-icons/bi'

export const ModalComponent: FC<ComponentProps> = ({
  onClose,
  children,
  open,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref?.current && ref2?.current) {
      ref.current.style.visibility = open ? 'visible' : 'hidden'
      ref2.current.style.opacity = open ? '1' : '0'
    }
  }, [open])

  return (
    <div className={styles.modal} ref={ref} onClick={onClose}>
      <div
        ref={ref2}
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

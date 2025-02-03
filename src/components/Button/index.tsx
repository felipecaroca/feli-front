import { FC } from 'react'
import { ComponentProps } from './types'
import styles from './styles.module.css'
import { BiLoader } from 'react-icons/bi'

export const ButtonComponent: FC<ComponentProps> = ({
  children,
  variant,
  onClick,
  loading,
  disabled,
  type,
}) => {
  return (
    <button
      type={type}
      onClick={(ev) =>
        !disabled && !loading && typeof onClick === 'function' && onClick(ev)
      }
      className={`${styles.button} ${styles[variant || 'default']} ${disabled || loading ? styles.disabled : ''}`}
    >
      {loading ? <BiLoader className={styles.loading} /> : children}
    </button>
  )
}

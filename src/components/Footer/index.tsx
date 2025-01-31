import { FC } from 'react'
import { ComponentProps } from './types'
import styles from './styles.module.css'

export const FooterComponent: FC<ComponentProps> = ({
  children,
  padding,
  bottom,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.footer} style={{ padding, bottom }}>
        {children}
      </div>
    </div>
  )
}

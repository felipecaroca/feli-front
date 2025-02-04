import { useRouter, useSearchParams } from 'next/navigation'
import styles from './styles.module.css'
import { FC } from 'react'

import { ComponentProps } from './types'
import { FcGoogle } from 'react-icons/fc'
import { FlexComponent } from '../Flex'

export const GoogleButtonComponent: FC<ComponentProps> = ({
  children,
  returnUrl,
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const onLoginClick = () => {
    const returnUrlGetted = returnUrl || searchParams.get('returnUrl')
    router.replace(
      `${process.env.USERS_LOGIN_URL || ''}${returnUrlGetted ? `?returnUrl=${returnUrlGetted}` : ''}`
    )
  }

  return (
    <button onClick={onLoginClick} className={styles.googleButton}>
      <FlexComponent justify="center">
        <FcGoogle size="30" />
        {children}
      </FlexComponent>
    </button>
  )
}

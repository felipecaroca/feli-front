'use client'

import {
  BoxComponent,
  FullScreenCenterComponent,
  MovingArrowComponent,
  TextComponent,
  TitleComponent,
} from '@/components'
import { useSession } from '@/hooks'
import { useGoogleOneTapLogin } from '@react-oauth/google'
import { useRouter, useSearchParams } from 'next/navigation'

import { useEffect } from 'react'
import { WAITINGLINE_URL } from '@/commons'

const LoginPage = () => {
  const { saveToken, logout } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()

  useGoogleOneTapLogin({
    onSuccess: (credentialResponse) => {
      if (credentialResponse.credential) {
        saveToken(credentialResponse.credential)
        const returnUrl = searchParams.get('returnUrl')
        router.replace(returnUrl || WAITINGLINE_URL)
      }
    },
  })

  useEffect(() => {
    logout()
  }, [])

  return (
    <FullScreenCenterComponent>
      <MovingArrowComponent top="20%" right="30%" />
      <MovingArrowComponent top="40%" right="28%" degrees={-20} />
      <MovingArrowComponent bottom="30%" right="10%" degrees={-90} />

      <BoxComponent padding="25px">
        <TitleComponent>No estas logueado</TitleComponent>
        <TextComponent textAlign="center">
          Inicia sesión con tu cuenta de google
        </TextComponent>
      </BoxComponent>
    </FullScreenCenterComponent>
  )
}

export default LoginPage

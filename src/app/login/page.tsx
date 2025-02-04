'use client'

import {
  BoxComponent,
  FullScreenCenterComponent,
  GoogleButtonComponent,
  TextComponent,
  TitleComponent,
} from '@/components'

import { Suspense } from 'react'

const LoginPage = () => {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  )
}

const LoginContent = () => {
  return (
    <FullScreenCenterComponent>
      <BoxComponent padding="25px">
        <TitleComponent>No estas logueado</TitleComponent>
        <TextComponent textAlign="center">
          Inicia sesión con tu cuenta de google
        </TextComponent>
        <BoxComponent padding="30px 0 0 0">
          <GoogleButtonComponent>Iniciar Sesión</GoogleButtonComponent>
        </BoxComponent>
      </BoxComponent>
    </FullScreenCenterComponent>
  )
}

export default LoginPage

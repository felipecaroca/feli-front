'use client'

import { useSession } from '@/hooks'
import { FC } from 'react'
import { ComponentProps } from './types'
import { MenuComponent } from '../Menu'
import { BoxComponent } from '../Box'
import { FlexComponent } from '../Flex'

export const ProtectedRouteComponent: FC<ComponentProps> = ({
  children,
  hideUserSession,
}) => {
  const { user, logout } = useSession()

  return (
    <>
      {user ? (
        <BoxComponent>
          {!hideUserSession && (
            <FlexComponent width="100%" justify="end">
              <MenuComponent {...{ user, logout }} />
            </FlexComponent>
          )}
          <BoxComponent>{children}</BoxComponent>
        </BoxComponent>
      ) : null}
    </>
  )
}

'use client'

import { useSession } from '@/hooks'
import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { MenuComponent } from '../Menu'
import { OrganizationHandlerComponent } from '../OrganizationHandler'

export const ProtectedRouteComponent: FC<ComponentProps> = ({
  children,
  hideUserSession,
}) => {
  const { user, logout } = useSession()

  return (
    <>
      {user ? (
        <Box>
          {!hideUserSession && (
            <Flex>
              <OrganizationHandlerComponent />{' '}
              <MenuComponent {...{ user, logout }} />
            </Flex>
          )}

          {children}
        </Box>
      ) : null}
    </>
  )
}

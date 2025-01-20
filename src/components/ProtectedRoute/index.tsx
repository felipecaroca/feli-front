'use client'

import { useSession } from '@/hooks'
import { Box } from '@chakra-ui/react'
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
            <Box
              bg="white"
              w="full"
              zIndex={99}
              position="fixed"
              top="0"
              boxShadow="md"
            >
              <MenuComponent {...{ user, logout }} />
              <OrganizationHandlerComponent />
            </Box>
          )}
          <Box pt="200px">{children}</Box>
        </Box>
      ) : null}
    </>
  )
}

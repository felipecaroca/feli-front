import { useSession } from '@/hooks'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { Button } from '../ui/button'
import { ComponentProps } from './types'

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
            <Button m={8} onClick={logout}>
              Cerrar Sesión
            </Button>
          )}
          {children}
        </Box>
      ) : null}
    </>
  )
}

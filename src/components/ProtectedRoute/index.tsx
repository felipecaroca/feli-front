import { useSession } from '@/hooks'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { MenuComponent } from '../Menu'

export const ProtectedRouteComponent: FC<ComponentProps> = ({
  children,
  hideUserSession,
}) => {
  const { user, logout } = useSession()

  return (
    <>
      {user ? (
        <Box>
          {!hideUserSession && <MenuComponent {...{ user, logout }} />}
          {children}
        </Box>
      ) : null}
    </>
  )
}

import { VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'

export const FullScreenCenterComponent: FC<ComponentProps> = ({ children }) => {
  return (
    <VStack w="full" h="100vh" justify="center" alignItems="center">
      {children}
    </VStack>
  )
}

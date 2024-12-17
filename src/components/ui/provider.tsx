'use client'

import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'
import { Toaster } from './toaster'
import { WithChildren } from '@/commons'

export function Provider(props: ColorModeProviderProps & WithChildren) {
  return (
    <ChakraProvider value={defaultSystem}>
      <Toaster />
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}

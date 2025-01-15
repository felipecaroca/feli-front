'use client'

import { WAITINGLINE_MENU } from '@/commons'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'
import { Button } from '@/components/ui/button'

import { useHomePage } from '@/hooks'
import { Flex } from '@chakra-ui/react'

const menu = WAITINGLINE_MENU

export default function Home() {
  const { onClick } = useHomePage()

  return (
    <ProtectedRouteComponent>
      <Flex
        wrap="wrap"
        gap={4}
        justify="center"
        align="center"
        mt={['200px', 'unset']}
      >
        {menu.map((item) => (
          <Button
            key={item.name}
            variant="outline"
            onClick={() => onClick(item)}
            w="200px"
            h="200px"
          >
            {item.name}
          </Button>
        ))}
      </Flex>
    </ProtectedRouteComponent>
  )
}

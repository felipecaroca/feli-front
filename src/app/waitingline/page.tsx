'use client'

import { WAITINGLINE_MENU } from '@/commons'
import {
  BoxComponent,
  ButtonComponent,
  NeedOrganizationComponent,
  ProtectedRouteComponent,
} from '@/components'

import { useHomePage } from '@/hooks'
import { Flex } from '@chakra-ui/react'

const menu = WAITINGLINE_MENU

export default function Home() {
  const { onClick } = useHomePage()

  return (
    <ProtectedRouteComponent>
      <NeedOrganizationComponent>
        <Flex
          wrap="wrap"
          gap={4}
          justify="center"
          align="center"
          mt={['200px', 'unset']}
        >
          {menu.map((item) => (
            <BoxComponent key={item.name}>
              <ButtonComponent onClick={() => onClick(item)}>
                {item.name}
              </ButtonComponent>
            </BoxComponent>
          ))}
        </Flex>
      </NeedOrganizationComponent>
    </ProtectedRouteComponent>
  )
}

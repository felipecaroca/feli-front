'use client'

import { FC, useState } from 'react'
import { ComponentProps, MenuItemType } from './types'

import { Link as ChakraLink, Text } from '@chakra-ui/react'

import { useAtom } from 'jotai'
import { menuAtom } from '@/commons'
import { sections } from './constants'
import Link from 'next/link'
import { OrganizationHandlerComponent } from '../OrganizationHandler'
import { ButtonComponent } from '../Button'
import LoggedUserComponent from '../LoggedUserComponent'
import { DrawerComponent } from '../Drawer'
import { useDisclosure } from '@/hooks'
import { BoxComponent } from '../Box'
import { CollapseComponent } from '../Collapse'

export const MenuComponent: FC<ComponentProps> = ({ user, logout }) => {
  const [menuKey, setMenuKey] = useAtom(menuAtom)
  const onMenuClick = (item: MenuItemType) => setMenuKey(item.id)

  const { open, onOpen, onClose } = useDisclosure()
  const defaultIndex = sections.findIndex(
    (item) => (menuKey?.split('-')?.[0] || '') === item.value
  )

  const [indexOpen, setIndexOpen] = useState<number | undefined>(
    defaultIndex >= 0 ? defaultIndex : undefined
  )

  return (
    <>
      <BoxComponent padding="10px">
        <ButtonComponent onClick={onOpen}>Menu</ButtonComponent>
      </BoxComponent>
      <DrawerComponent {...{ open, onClose }}>
        <LoggedUserComponent {...{ user }} />
        <OrganizationHandlerComponent />

        {sections.map((section, index) => (
          <div key={index}>
            <BoxComponent padding="10px" onClick={() => setIndexOpen(index)}>
              {section.title}
            </BoxComponent>
            <CollapseComponent open={indexOpen === index}>
              <BoxComponent padding="10px">
                {section.items?.map((item) => (
                  <ChakraLink
                    asChild
                    bg={menuKey === item.id ? 'gray.100' : ''}
                    w="full"
                    key={item.id}
                    p="5px"
                  >
                    <Link href={item.onClick} onClick={() => onMenuClick(item)}>
                      <Text w="full" textAlign="left">
                        {item?.name}
                      </Text>
                    </Link>
                  </ChakraLink>
                ))}
              </BoxComponent>
            </CollapseComponent>
          </div>
        ))}

        <ButtonComponent onClick={logout}>Cerrar sesión</ButtonComponent>
      </DrawerComponent>
    </>
  )
}

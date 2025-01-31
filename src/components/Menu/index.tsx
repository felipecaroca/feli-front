'use client'

import { FC } from 'react'
import { ComponentProps, MenuItemType } from './types'
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '../ui/button'

import { Box, Flex, Link as ChakraLink, Text } from '@chakra-ui/react'
import { Avatar } from '@/components/ui/avatar'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from '@/components/ui/accordion'

import { useAtom } from 'jotai'
import { menuAtom } from '@/commons'
import { sections } from './constants'
import Link from 'next/link'
import { OrganizationHandlerComponent } from '../OrganizationHandler'

export const MenuComponent: FC<ComponentProps> = ({ user, logout }) => {
  const [menuKey, setMenuKey] = useAtom(menuAtom)
  const onMenuClick = (item: MenuItemType) => setMenuKey(item.id)

  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm" m={4}>
          Menu
        </Button>
      </DrawerTrigger>
      <DrawerContent offset="4" rounded="md">
        <DrawerHeader borderBottom="1px solid" borderBottomColor="gray.300">
          <Flex gap={2} alignItems="center">
            <Avatar name={user?.name} src={user?.picture} />
            <Box>
              <DrawerTitle>{user?.name}</DrawerTitle>
              <Text>{user?.email}</Text>
            </Box>
          </Flex>
          <OrganizationHandlerComponent />
        </DrawerHeader>
        <DrawerBody>
          <AccordionRoot
            collapsible
            defaultValue={[menuKey?.split('-')?.[0] || '']}
          >
            {sections.map((section, index) => (
              <AccordionItem key={index} value={section.value}>
                <AccordionItemTrigger>{section.title}</AccordionItemTrigger>
                <AccordionItemContent>
                  {section.items?.map((item) => (
                    <ChakraLink
                      asChild
                      bg={menuKey === item.id ? 'gray.100' : ''}
                      w="full"
                      key={item.id}
                      p="5px"
                    >
                      <Link
                        href={item.onClick}
                        onClick={() => onMenuClick(item)}
                      >
                        <Text w="full" textAlign="left">
                          {item?.name}
                        </Text>
                      </Link>
                    </ChakraLink>
                  ))}
                </AccordionItemContent>
              </AccordionItem>
            ))}
          </AccordionRoot>
        </DrawerBody>
        <DrawerFooter>
          <Button onClick={logout} w="full">
            Cerrar sesión
          </Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  )
}

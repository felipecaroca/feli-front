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

import { Box, Flex, Text } from '@chakra-ui/react'
import { Avatar } from '@/components/ui/avatar'
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from '@/components/ui/accordion'
import { useRouter } from 'next/navigation'

import { useAtom } from 'jotai'
import { menuAtom } from '@/commons'
import { sections } from './constants'

export const MenuComponent: FC<ComponentProps> = ({ user, logout }) => {
  const router = useRouter()
  const [menuKey, setMenuKey] = useAtom(menuAtom)

  const onMenuClick = (item: MenuItemType) => {
    setMenuKey(item.id)
    router.push(item.onClick)
  }

  return (
    <DrawerRoot>
      <DrawerBackdrop />
      <DrawerTrigger asChild position="fixed" right={0}>
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
                    <Button
                      variant={menuKey === item.id ? 'subtle' : 'ghost'}
                      w="full"
                      key={item.id}
                      onClick={() => onMenuClick(item)}
                    >
                      <Text w="full" textAlign="left">
                        {item?.name}
                      </Text>
                    </Button>
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

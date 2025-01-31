import { User } from '@/commons'

export type ComponentProps = {
  user?: User
  logout():void  
}

export type MenuItemType = { 
  id: string 
  name: string 
  onClick: string 
}

export type MenuSectionType = {
  value: string
  title: string
  items: MenuItemType[],
}
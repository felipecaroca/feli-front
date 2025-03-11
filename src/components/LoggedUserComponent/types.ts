import { User } from '@/commons'

export type ComponentProps = {
  user?: User
  onClick?(): void
  tooltip?:string
}
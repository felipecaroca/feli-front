import { ReactNode } from 'react'

export type WithChildren = {
  children: ReactNode
  textAlign?: 'center'|'start'|'end'
}
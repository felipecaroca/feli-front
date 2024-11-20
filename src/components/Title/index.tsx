import { Heading } from '@chakra-ui/react'
import { FC } from 'react'
import { WithChildren } from '@/commons'

export const TitleComponent: FC<WithChildren> = ({ children }) => {
  return (
    <Heading size="2xl" textAlign="center">
      {children}
    </Heading>
  )
}

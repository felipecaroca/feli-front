import { Heading, HeadingProps } from '@chakra-ui/react'
import { FC } from 'react'
import { WithChildren } from '@/commons'

export const TitleComponent: FC<WithChildren & HeadingProps> = ({
  children,
  ...headingProps
}) => {
  return (
    <Heading size="2xl" textAlign="center" {...headingProps}>
      {children}
    </Heading>
  )
}

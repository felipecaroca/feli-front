import { Text } from '@chakra-ui/react'
import { FC } from 'react'
import { Props } from './types'

export const ErrorMessageComponent: FC<Props> = ({ message }) => {
  return message ? (
    <Text color="red.500" fontSize="12px">
      {message}
    </Text>
  ) : null
}

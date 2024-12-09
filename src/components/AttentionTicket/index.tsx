import { Box, Flex, Text, chakra } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { TitleComponent } from '../Title'
import {
  ATTENTION_STATUS_COLORS,
  renderAttentionNumber,
  renderAttentionStatus,
} from '@/commons'

export const AttentionTicketComponent: FC<ComponentProps> = ({ attention }) => {
  return (
    <Flex justify="center" alignItems="center" direction="column">
      <Box
        boxShadow="2xl"
        bg="white"
        color="black"
        w="full"
        borderTopRadius="16px"
        borderBottomRadius="20px"
        p="20px"
      >
        <TitleComponent>Tu número de atención es:</TitleComponent>
        <Text textAlign="center" fontSize={30} fontWeight={700}>
          {renderAttentionNumber(attention)}
        </Text>
        <Text textAlign="center">
          Estado:{' '}
          <chakra.span
            bg={
              attention?.status ? ATTENTION_STATUS_COLORS[attention.status] : ''
            }
            p="4px"
            borderRadius={5}
          >
            {renderAttentionStatus(attention)}
          </chakra.span>
        </Text>
      </Box>
    </Flex>
  )
}

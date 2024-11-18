import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { renderAttentionName, renderAttentionNumber } from '@/commons'

export const AttentionListComponent: FC<ComponentProps> = ({ attentions }) => {
  return (
    <Box>
      {attentions.map((attention) => (
        <Flex
          key={attention.id}
          gap={4}
          p={2}
          borderBottom="1px solid"
          borderBottomColor="gray.300"
        >
          <Box fontWeight={600}>{renderAttentionNumber(attention)}</Box>
          <Box>{renderAttentionName(attention)}</Box>
        </Flex>
      ))}
    </Box>
  )
}

import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { renderAttentionName, renderAttentionNumber } from '@/commons'
import { SkeletonSquare } from '../ui/skeleton'

export const AttentionListComponent: FC<ComponentProps> = ({
  attentions,
  getting,
}) => {
  return (
    <Box>
      {getting ? (
        <SkeletonSquare noOfLines={3} w="full" h={10} my={2} />
      ) : (
        attentions.map((attention) => (
          <Flex
            key={attention.id}
            gap={4}
            p={2}
            borderBottom="1px solid"
            borderBottomColor="gray.300"
          >
            <Box fontWeight={600}>{renderAttentionNumber(attention)}</Box>
            {attention.module && <Box>{attention.module.name}</Box>}
            <Box>{renderAttentionName(attention)}</Box>
          </Flex>
        ))
      )}
    </Box>
  )
}

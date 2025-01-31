import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { renderAttentionName, renderAttentionNumber } from '@/commons'
import { SkeletonComponent } from '../Skeleton'
import { BoxComponent } from '../Box'

export const AttentionListComponent: FC<ComponentProps> = ({
  attentions,
  getting,
}) => {
  return (
    <Box>
      {getting ? (
        <BoxComponent padding="10px 0">
          <SkeletonComponent noOfLines={3} width="100%" height="10px" />
        </BoxComponent>
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

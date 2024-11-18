import { Box, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { renderAttentionName, renderAttentionNumber } from '@/commons'
import { Button } from '../ui/button'

export const CurrentAttentionComponent: FC<ComponentProps> = ({
  attention,
  onCall,
  onOk,
  onSkip,
}) => {
  return (
    <Box border="1px solid" borderColor="gray.300" borderRadius={4} p={6}>
      <Box>Número de atención: {renderAttentionNumber(attention)}</Box>
      <Box>Cliente: {renderAttentionName(attention)}</Box>

      <VStack gap={2} justify="center" alignItems="center" pt={20}>
        <Box w="full" maxW={300}>
          <Button
            w="full"
            maxW={300}
            onClick={() => onCall(attention)}
            disabled={!attention}
            colorPalette="blue"
          >
            Llamar
          </Button>
        </Box>
        <Box w="full" maxW={300}>
          <Button
            w="full"
            maxW={300}
            onClick={() => onSkip(attention)}
            disabled={!attention}
            colorPalette="orange"
          >
            Saltar
          </Button>
        </Box>
        <Box w="full" maxW={300}>
          <Button
            w="full"
            maxW={300}
            colorPalette="green"
            onClick={() => onOk(attention)}
            disabled={!attention}
          >
            Finalizar OK
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}

import { Box, VStack, Text, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { renderAttentionName, renderAttentionNumber } from '@/commons'
import { ButtonComponent } from '../Button'

export const CurrentAttentionComponent: FC<ComponentProps> = ({
  attention,
  onCall,
  onOk,
  onSkip,
  calling,
}) => {
  return (
    <Box border="1px solid" borderColor="gray.300" borderRadius={4} p={6}>
      <Flex gap={2}>
        Número de atención:
        <Text fontWeight={600}>{renderAttentionNumber(attention)}</Text>
      </Flex>
      <Flex gap={2}>
        Cliente: <Text fontWeight={600}>{renderAttentionName(attention)}</Text>
      </Flex>

      <VStack gap={2} justify="center" alignItems="center" pt={20}>
        <Box w="full" maxW={300}>
          <ButtonComponent
            onClick={() => onCall(attention)}
            disabled={!attention}
            variant="info"
            loading={calling}
          >
            Llamar
          </ButtonComponent>
        </Box>
        <Box w="full" maxW={300}>
          <ButtonComponent
            onClick={() => onSkip(attention)}
            disabled={!attention}
            variant="warning"
          >
            Saltar
          </ButtonComponent>
        </Box>
        <Box w="full" maxW={300}>
          <ButtonComponent
            variant="success"
            onClick={() => onOk(attention)}
            disabled={!attention}
          >
            Finalizar OK
          </ButtonComponent>
        </Box>
      </VStack>
    </Box>
  )
}

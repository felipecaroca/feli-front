'use client'

import {
  AttentionListComponent,
  CurrentAttentionComponent,
  FullScreenCenterComponent,
  TitleComponent,
} from '@/components'
import { useManageAttentionPage } from '@/hooks'
import { Box, Button, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { PageProps } from './type'

const ManageAttentionPage: FC<PageProps> = (props) => {
  const {
    currentAttention,
    attentions,
    onCall,
    onNext,
    onOk,
    onReset,
    onSkip,
  } = useManageAttentionPage(props)
  return (
    <FullScreenCenterComponent>
      <Box mb={14}>
        <TitleComponent>Atención de clientes</TitleComponent>
      </Box>
      <Flex w={['100%', '100%', '80%', '80%', '70%']} wrap="wrap" gap={4}>
        <Box w={['100%', '100%', '45%']}>
          <Box>
            <CurrentAttentionComponent
              {...{ attention: currentAttention, onCall, onOk, onSkip }}
            />
          </Box>
        </Box>
        <Box
          w={['100%', '100%', '45%']}
          border="1px solid"
          borderColor="gray.300"
          borderRadius={4}
          p={6}
        >
          <Flex justify="end" py={4}>
            <Button
              colorPalette="green"
              onClick={() => onNext(currentAttention)}
            >
              Atender siguiente
            </Button>
          </Flex>
          <Box>
            <AttentionListComponent {...{ attentions }} />
          </Box>
          <Flex justify="center" py={4}>
            <Button colorPalette="red" onClick={onReset}>
              Resetear lista
            </Button>
          </Flex>
        </Box>
      </Flex>
    </FullScreenCenterComponent>
  )
}

export default ManageAttentionPage

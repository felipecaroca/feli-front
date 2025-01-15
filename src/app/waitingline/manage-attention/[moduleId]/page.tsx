'use client'

import {
  AttentionListComponent,
  ConfirmationDialogComponent,
  CurrentAttentionComponent,
  TitleComponent,
} from '@/components'
import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'
import { PageProps } from './type'
import { useManageModuleAttentionPage } from '@/hooks'
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'

const ManageModuleAttentionPage: FC<PageProps> = (props) => {
  const {
    module,
    attentions,
    noAttentionsAvailable,
    currentAttention,
    confirmationContent,
    onCloseConfirmation,
    onConfirm,
    onCall,
    onOk,
    onSkip,
    onNext,
    onReset,
    getting,
    resetting,
    changing,
    calling,
  } = useManageModuleAttentionPage(props)

  return (
    <ProtectedRouteComponent>
      <Flex justify="center">
        <Flex direction="column" align="center" w="full">
          <Box mb={14}>
            <TitleComponent>
              Atención de clientes {module ? `${module.name}` : ''}
            </TitleComponent>
          </Box>
          <Box mb="10px" maxW="500px">
            {noAttentionsAvailable && (
              <Alert>
                No hay clientes por atender en este momento, los botones se
                habilitarán cuando existan clientes por atender.
              </Alert>
            )}
          </Box>
          <Flex w="full" wrap="wrap" gap={4} justify="center">
            <Box w={['100%', '100%', '45%']}>
              <Box>
                <CurrentAttentionComponent
                  {...{
                    attention: currentAttention,
                    onCall,
                    onOk,
                    onSkip,
                    calling,
                  }}
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
                  onClick={onNext}
                  disabled={noAttentionsAvailable}
                  loading={changing}
                >
                  Atender siguiente
                </Button>
              </Flex>
              <Box>
                <AttentionListComponent {...{ attentions, getting }} />
              </Box>
              <Flex justify="center" py={4}>
                <Button
                  colorPalette="red"
                  onClick={onReset}
                  disabled={noAttentionsAvailable || resetting}
                >
                  Resetear lista
                </Button>
              </Flex>
            </Box>
            <ConfirmationDialogComponent
              onCancel={onCloseConfirmation}
              onConfirm={() => onConfirm(confirmationContent?.action)}
              open={!!confirmationContent}
              onClose={onCloseConfirmation}
              loading={resetting || changing}
            >
              {confirmationContent?.text || ''}
            </ConfirmationDialogComponent>
          </Flex>
        </Flex>
      </Flex>
    </ProtectedRouteComponent>
  )
}

export default ManageModuleAttentionPage

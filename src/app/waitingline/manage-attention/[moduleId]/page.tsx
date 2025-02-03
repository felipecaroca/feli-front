'use client'

import {
  AttentionListComponent,
  ButtonComponent,
  ConfirmationDialogComponent,
  CurrentAttentionComponent,
  NeedOrganizationComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'
import { Box, Flex } from '@chakra-ui/react'

import { useManageModuleAttentionPage } from '@/hooks'
import { Alert } from '@/components/ui/alert'

const ManageModuleAttentionPage = () => {
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
  } = useManageModuleAttentionPage()

  return (
    <ProtectedRouteComponent>
      <NeedOrganizationComponent>
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
                  <ButtonComponent
                    variant="success"
                    onClick={onNext}
                    disabled={noAttentionsAvailable}
                    loading={changing}
                  >
                    Atender siguiente
                  </ButtonComponent>
                </Flex>
                <Box>
                  <AttentionListComponent {...{ attentions, getting }} />
                </Box>
                <Flex justify="center" py={4}>
                  <ButtonComponent
                    variant="danger"
                    onClick={onReset}
                    disabled={noAttentionsAvailable || resetting}
                  >
                    Resetear lista
                  </ButtonComponent>
                </Flex>
              </Box>
              <ConfirmationDialogComponent
                onCancel={onCloseConfirmation}
                onConfirm={() => onConfirm(confirmationContent?.action)}
                open={!!confirmationContent}
                loading={resetting || changing}
              >
                {confirmationContent?.text || ''}
              </ConfirmationDialogComponent>
            </Flex>
          </Flex>
        </Flex>
      </NeedOrganizationComponent>
    </ProtectedRouteComponent>
  )
}

export default ManageModuleAttentionPage

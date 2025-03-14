'use client'

import { Box, Flex, Text, chakra } from '@chakra-ui/react'

import QRCode from 'react-qr-code'
import { useQrCodePage } from '@/hooks'
import { Alert } from '@/components/ui/alert'
import {
  BoxComponent,
  ButtonComponent,
  NeedOrganizationComponent,
  ProtectedRouteComponent,
} from '@/components'

const QrCodePage = () => {
  const { qrValue: value, showForManager, hidden, setHidden } = useQrCodePage()

  return (
    <ProtectedRouteComponent {...{ hideUserSession: !showForManager }}>
      <NeedOrganizationComponent>
        <Flex justify="center">
          <Flex direction="column" justify="center" align="center">
            <Box>
              {showForManager && (
                <Alert>
                  Puedes presionar{' '}
                  <chakra.span fontWeight={700}>F11</chakra.span> para mostrar
                  esta pantalla al público
                </Alert>
              )}
            </Box>
            <Text py="6">
              Escanea este código para obtener el turno de atención
            </Text>
            <>
              {value && (
                <>
                  <Box border="1px dashed #000" p={4} width="290px">
                    <QRCode {...{ value }} />
                  </Box>

                  {!hidden && showForManager && (
                    <BoxComponent padding="20px 0 0 0">
                      <ButtonComponent onClick={() => setHidden(true)}>
                        Imprimir
                      </ButtonComponent>
                    </BoxComponent>
                  )}
                </>
              )}
            </>
          </Flex>
        </Flex>
      </NeedOrganizationComponent>
    </ProtectedRouteComponent>
  )
}

export default QrCodePage

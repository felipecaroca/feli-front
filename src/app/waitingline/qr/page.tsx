'use client'

import { Box, Flex, Text, chakra } from '@chakra-ui/react'
import { FC } from 'react'
import QRCode from 'react-qr-code'
import { useQrCodePage } from '@/hooks'
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'

const QrCodePage: FC = () => {
  const { qrValue: value, showForManager, hidden, setHidden } = useQrCodePage()

  return (
    <ProtectedRouteComponent {...{ hideUserSession: !showForManager }}>
      <Flex justify="center">
        <Flex direction="column" justify="center" align="center">
          <Box>
            {showForManager && (
              <Alert>
                Puedes presionar <chakra.span fontWeight={700}>F11</chakra.span>{' '}
                para mostrar esta pantalla al público
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
                  <Button
                    my="4"
                    variant="outline"
                    onClick={() => setHidden(true)}
                  >
                    Imprimir
                  </Button>
                )}
              </>
            )}
          </>
        </Flex>
      </Flex>
    </ProtectedRouteComponent>
  )
}

export default QrCodePage

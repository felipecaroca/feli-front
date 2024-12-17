'use client'

import { Box, Text, chakra } from '@chakra-ui/react'
import { FC, useEffect, useState } from 'react'
import QRCode from 'react-qr-code'
import { PageProps } from './types'
import { useIsFullScreen, useQrCodePage } from '@/hooks'
import { FullScreenCenterComponent } from '@/components'
import { Button } from '@/components/ui/button'
import { Alert } from '@/components/ui/alert'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'

const QrCodePage: FC<PageProps> = (props) => {
  const { qrValue: value } = useQrCodePage(props)
  const [hidden, setHidden] = useState<boolean>(false)
  const { isFullScreen } = useIsFullScreen()

  useEffect(() => {
    if (hidden) {
      window?.print()
      setHidden(false)
    }
  }, [hidden])

  const showForManager = !hidden && !isFullScreen

  return (
    <ProtectedRouteComponent {...{ hideUserSession: !showForManager }}>
      <FullScreenCenterComponent>
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
              <Box border="1px dashed #000" p={4}>
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
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default QrCodePage

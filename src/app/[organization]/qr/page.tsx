'use client'

import { Text } from '@chakra-ui/react'
import { FC } from 'react'
import QRCode from 'react-qr-code'
import { PageProps } from './types'
import { useQrCodePage } from '@/hooks'
import { FullScreenCenterComponent } from '@/components'
import { Button } from '@/components/ui/button'

const QrCodePage: FC<PageProps> = (props) => {
  const { qrValue: value } = useQrCodePage(props)

  return (
    <FullScreenCenterComponent>
      <Text py="6">Escanea el código para obtener tu turno de atención</Text>
      <>{value && <QRCode {...{ value }} />}</>
      <Button my="4" variant="outline">
        Atención manual
      </Button>
    </FullScreenCenterComponent>
  )
}

export default QrCodePage

import { Box, chakra } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { Alert } from '../ui/alert'
import { ButtonComponent } from '../Button'
import { BoxComponent } from '../Box'

export const AcceptAudioButtonComponent: FC<ComponentProps> = ({
  isServiceWorkerCompatible,
  acceptAudio,
}) => {
  return !isServiceWorkerCompatible ? (
    <Box justifyItems="center">
      <Alert>
        ¿Deseas que se emita un sonido cuando sea tu turno?. Presiona el botón{' '}
        <chakra.span fontWeight={700}>Emitir sonido</chakra.span> para activar
      </Alert>
      <BoxComponent padding="20px 0 0 0">
        <ButtonComponent onClick={acceptAudio}>Emitir sonido</ButtonComponent>
      </BoxComponent>
      <Alert status="warning">
        Recuerda tener tu dispositivo con el volumen activado para poder oir la
        notificación
      </Alert>
    </Box>
  ) : null
}

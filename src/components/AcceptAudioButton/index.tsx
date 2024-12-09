import { Box, chakra } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './types'
import { Button } from '../ui/button'
import { Alert } from '../ui/alert'

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
      <Button my={4} onClick={acceptAudio}>
        Emitir sonido
      </Button>
      <Alert status="warning">
        Recuerda tener tu dispositivo con el volumen activado para poder oir la
        notificación
      </Alert>
    </Box>
  ) : null
}

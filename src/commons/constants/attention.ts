import { AttentionStatusEnum, ConfirmActionType, ConfirmationType } from '../types'

export const CONFIRMATION_CONTENTS: ConfirmationType<ConfirmActionType>[] = [
  {
    text: 'Las atenciones pendientes serán eliminadas. ¿Realmente desea continuar?',
    action: 'reset',
  },
  {
    text: 'La atención actual será saltada y se atenderá al siguiente en la lista. ¿Realmente desea continuar?',
    action: 'skip',
  },
]

export const ATTENTION_STATUS = {
  [AttentionStatusEnum.ATTENDING]: 'Atendiendo',
  [AttentionStatusEnum.SKIPPED]: 'Perdido',
  [AttentionStatusEnum.WAITING]: 'Esperando',
  [AttentionStatusEnum.OK]: 'Finalizado'
}

export const ATTENTION_STATUS_COLORS = {
  [AttentionStatusEnum.ATTENDING]: 'blue.100',
  [AttentionStatusEnum.SKIPPED]: 'red.400',
  [AttentionStatusEnum.WAITING]: 'gray.200',
  [AttentionStatusEnum.OK]: 'green.200'
}
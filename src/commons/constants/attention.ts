import { ConfirmActionType, ConfirmationType } from '../types'

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
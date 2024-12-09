import { NotificationType } from './types'

export const NOTIFICATIONS: Record<string, NotificationType> = {
  ATTENDING: {
    title: '¡Es tu turno!',
    description: 'Dirigete al lugar de atención',
    type: 'success',
    duration: 5000,
  },
}

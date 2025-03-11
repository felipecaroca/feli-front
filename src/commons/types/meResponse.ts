import { User } from './models'

export type MeResponse = {
  user: User,
  idToken?: string
}
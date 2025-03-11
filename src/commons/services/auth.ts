import { MeResponse } from '../types'
import { Get } from './api'

const url = `${process.env.NEXT_PUBLIC_WAITING_LINE_BACK || ''}/me`

export const getMe = async () => 
  Get<MeResponse>(url)
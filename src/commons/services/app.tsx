import { AppModel } from '../types'
import { Get } from './api'

const url = `${process.env.NEXT_PUBLIC_PLANS_BACK || ''}/apps`

export const getAppsService = async () => Get<AppModel[]>(`${url}`)

export const getAppByIdService = async (id: string) =>
  Get<AppModel>(`${url}/${id}`)

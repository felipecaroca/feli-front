import { ModuleModel } from '../types'
import { get } from './api'

export const getModules = async (business: string) => {
  const url = process.env.NEXT_PUBLIC_WAITING_LINE_BACK || ''

  return get<ModuleModel[]>(`${url}/modules/${business}`)
}
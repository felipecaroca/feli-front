'use client'

import { AppModel, getAppByIdService, getAppsService } from '@/commons'
import { useLoading } from '../useLoading'

export const useAppsCRUD = () => {
  const { call: callGetOne, loading: gettingOne } = useLoading()
  const { call: callGetAll, loading: gettingAll } = useLoading()

  const getApps = () =>
    callGetAll(
      () => getAppsService(),
      () => [] as AppModel[]
    )

  const getAppById = (id: string) =>
    callGetOne(
      () => getAppByIdService(id),
      () => undefined
    )

  return {
    getAppById,
    gettingOne,
    getApps,
    gettingAll,
  }
}

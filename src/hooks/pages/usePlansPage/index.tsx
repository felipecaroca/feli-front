'use client'

import { AppModel } from '@/commons'
import { useAppsCRUD } from '@/hooks/useAppsCRUD'
import { useEffect, useState } from 'react'

export const usePlansPage = () => {
  const [apps, setApps] = useState<AppModel[] | undefined>()
  const [seeMore, setSeeMore] = useState<AppModel | undefined>(undefined)
  const [selectedApps, setSelectedApps] = useState<AppModel[]>([])
  const { getApps, gettingAll } = useAppsCRUD()

  const onSeeMore = (app: AppModel) => setSeeMore(app)
  const onSelect = (app: AppModel) => {
    if (selectedApps.some((item) => item.id === app.id))
      setSelectedApps(selectedApps.filter((item) => item.id !== app.id))
    else setSelectedApps([...selectedApps, app])
  }

  useEffect(() => {
    getApps()
      .then((res) => setApps(res || []))
      .catch((err) => console.log('//TODO: manejar el error', err))
  }, [])

  return {
    apps,
    loading: gettingAll || apps === undefined,
    onSeeMore,
    onSelect,
  }
}

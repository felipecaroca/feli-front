'use client'

import { AppModel, appsSelectedAtom } from '@/commons'
import { useAppsCRUD } from '@/hooks/useAppsCRUD'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const usePlansPage = () => {
  const [apps, setApps] = useState<AppModel[] | undefined>()
  const [seeMore, setSeeMore] = useState<AppModel | undefined>(undefined)
  const [selectedApps, setSelectedApps] = useAtom(appsSelectedAtom)
  const { getApps, gettingAll } = useAppsCRUD()
  const router = useRouter()

  const onSeeMore = (app: AppModel) => setSeeMore(app)

  const onSelect = (app: AppModel) => {
    if (selectedApps.some((item) => item.id === app.id))
      setSelectedApps(selectedApps.filter((item) => item.id !== app.id))
    else setSelectedApps([...selectedApps, app])
  }

  const onCartClick = () => router.push('/plans/cart')

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
    onCartClick,
    selectedApps,
    seeMore,
  }
}

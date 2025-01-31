'use client'

import { ModuleModel, organizationAtom } from '@/commons'
import { useModulesCRUD } from '@/hooks'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useAttendPage = () => {
  const [modules, setModules] = useState<ModuleModel[] | undefined>(undefined)
  const currentOrganization = useAtomValue(organizationAtom)
  const organizationId = currentOrganization?.id || ''
  const {getModules, getting} = useModulesCRUD()
  const router = useRouter()

  const onCardClick = (module?: ModuleModel) => router.push(`manage-attention/${module?.id || ''}`)
  const hasModules = (modules?.length ||0) > 0


  useEffect(() => {
    if(organizationId)
      getModules(organizationId).then(modules => {
        if(modules.length > 0)
          setModules(modules)
        else router.replace('manage-attention')
      })
  }, [organizationId])

  return {
    modules, 
    getting,
    hasModules,
    onCardClick,
  }
}
import { ModuleModel, WithOrganizationParam } from '@/commons'
import { useModulesCRUD, useOrganizationParam } from '@/hooks'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useAttendPage = (props: WithOrganizationParam) => {
  const [modules, setModules] = useState<ModuleModel[] | undefined>(undefined)
  const {organization} = useOrganizationParam(props)
  const {getModules, getting} = useModulesCRUD()
  const router = useRouter()

  const onCardClick = (module?: ModuleModel) => router.push(`manage-attention/${module?.id || ''}`)
  const hasModules = (modules?.length ||0) > 0


  useEffect(() => {
    if(organization)
      getModules(organization).then(modules => {
        if(modules.length > 0)
          setModules(modules)
        else router.replace('manage-attention')
      })
  }, [organization])

  return {
    organization,
    modules, 
    getting,
    hasModules,
    onCardClick,
  }
}
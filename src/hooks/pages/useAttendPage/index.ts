import { ModuleModel, WithOrganizationParam } from '@/commons'
import { useModulesCRUD, useOrganizationParam } from '@/hooks'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useAttendPage = (props: WithOrganizationParam) => {
  const [modules, setModules] = useState<ModuleModel[]>([])
  const {organization} = useOrganizationParam(props)
  const {getModules, getting} = useModulesCRUD()
  const router = useRouter()

  const onCardClick = (module?: ModuleModel) => router.push(`/manage-attention/${module?.id || ''}`)


  useEffect(() => {
    if(organization)
      getModules(organization).then(modules => setModules(modules))
  }, [organization])

  return {
    organization,
    modules, 
    getting,
    onCardClick,
  }
}
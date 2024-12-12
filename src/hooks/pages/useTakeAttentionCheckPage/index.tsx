import { ModuleModel, WithOrganizationParam } from '@/commons'
import { useModulesCRUD, useOrganizationParam } from '@/hooks'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useTakeAttentionCheckPage = (props: WithOrganizationParam) => {
  const [modules, setModules] = useState<ModuleModel[] | undefined>()
  const { getModules } = useModulesCRUD()
  const router = useRouter()
  const { organization } = useOrganizationParam(props)

  const onCardClick = (selectedModule: ModuleModel) =>
    router.push(`${selectedModule.id}`)

  useEffect(() => {
    if (organization)
      getModules(organization).then((mods) => {
        if (mods.length > 0) setModules(mods)
        else router.replace(`/${organization}/take-attention`)
      })
  }, [organization])

  return {
    modules,
    onCardClick,
  }
}

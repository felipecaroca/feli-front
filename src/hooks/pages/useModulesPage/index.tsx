import { getModules, ModuleModel, WithOrganizationParam } from '@/commons'
import { useOrganizationParam } from '@/hooks'
import { useEffect, useState } from 'react'

export const useModulesPage = (props: WithOrganizationParam) => {
  const [modules, setModules] = useState<ModuleModel[]>([])
  const [forDelete, setForDelete] = useState<ModuleModel | undefined>()

  const [loading, setLoading] = useState<boolean>(true)
  const { organization } = useOrganizationParam(props)
  const modulesQuery = async (organization: string) => {
    try {
      setLoading(true)
      const response = await getModules(organization)

      setModules(response)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const onDelete = (module: ModuleModel) => setForDelete(module)

  useEffect(() => {
    if (organization) modulesQuery(organization)
  }, [organization])

  return {
    loading,
    modules,
    delete: {
      confirmOpen: !!forDelete,
      onCloseConfirm: () => setForDelete(undefined),
      onDelete,
      deleteModule: () =>
        console.log(
          'borrar modulo',
          forDelete,
          ', limpiar forDelete y llamar a la query'
        ),
      deleting: false, // cargando de la eliminación
    },
  }
}

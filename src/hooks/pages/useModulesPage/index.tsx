import { ModuleModel, WithOrganizationParam } from '@/commons'
import { ModuleFormType, useModulesCRUD, useOrganizationParam } from '@/hooks'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const useModulesPage = (props: WithOrganizationParam) => {
  const [modules, setModules] = useState<ModuleModel[]>([])
  const [forDelete, setForDelete] = useState<ModuleModel | undefined>()
  const {
    getModules,
    createModule,
    deleteModule,
    getting,
    creating,
    deleting,
  } = useModulesCRUD()
  const {
    onOpen: onOpenNew,
    onClose: onCloseNew,
    open: openNew,
  } = useDisclosure()

  const { organization } = useOrganizationParam(props)

  const onDelete = (module: ModuleModel) => setForDelete(module)
  const onCreate = async (values: ModuleFormType) => {
    const newModule = await createModule(organization, values)

    if (!newModule) return

    onCloseNew()
    setModules(await getModules(organization))
  }
  const onDeleteModule = async () => {
    if (!forDelete) return

    const deleted = await deleteModule(organization, forDelete.id)
    if (!deleted) return

    setForDelete(undefined)
    setModules(await getModules(organization))
  }

  useEffect(() => {
    if (organization)
      getModules(organization).then((response) => setModules(response))
  }, [organization])

  return {
    openNew,
    onOpenNew,
    onCloseNew,
    loading: getting,
    modules,
    organization,
    create: {
      onCreate,
      creating,
    },
    delete: {
      confirmOpen: !!forDelete,
      onCloseConfirm: () => setForDelete(undefined),
      onDelete,
      onDeleteModule,
      deleting,
    },
  }
}

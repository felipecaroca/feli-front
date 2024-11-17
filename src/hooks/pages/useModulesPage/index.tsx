import { ModuleModel, SaveModInput, WithOrganizationParam } from '@/commons'
import { ModuleFormType, useModulesCRUD, useOrganizationParam } from '@/hooks'
import { useDisclosure } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export const useModulesPage = (props: WithOrganizationParam) => {
  const [modules, setModules] = useState<ModuleModel[]>([])
  const [forDelete, setForDelete] = useState<ModuleModel | undefined>()
  const [forUpdate, setForUpdate] = useState<ModuleModel | undefined>()
  const {
    getModules,
    createModule,
    deleteModule,
    updateModule,
    getting,
    creating,
    deleting,
    updating,
  } = useModulesCRUD()
  const {
    onOpen: onOpenNew,
    onClose: onCloseNew,
    open: openNew,
  } = useDisclosure()

  const { organization } = useOrganizationParam(props)

  const refreshModules = async () => setModules(await getModules(organization))

  const onDelete = (module: ModuleModel) => setForDelete(module)

  const onCreate = async (values: ModuleFormType) => {
    const newModule = await createModule(organization, values)

    if (!newModule) return

    onCloseNew()
    refreshModules()
  }

  const onDeleteModule = async () => {
    if (!forDelete) return

    const deleted = await deleteModule(organization, forDelete.id)
    if (!deleted) return

    setForDelete(undefined)
    refreshModules()
  }

  const onEdit = (forUpdateObject: ModuleModel) => setForUpdate(forUpdateObject)
  const onCloseEdit = () => setForUpdate(undefined)

  const onUpdate = async (input: SaveModInput) => {
    if (!forUpdate) return

    const update = await updateModule(organization, forUpdate.id, input)
    if (!update) return

    setForUpdate(undefined)
    refreshModules()
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
    update: {
      onEdit,
      onCloseEdit,
      forUpdate,
      onUpdate,
      updating,
    },
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

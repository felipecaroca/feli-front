'use client'

import { ModuleModel, organizationAtom, SaveModInput } from '@/commons'
import { useModulesCRUD } from '@/hooks'
import { useDisclosure } from '@chakra-ui/react'
import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

export const useModulesPage = () => {
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
  const currentOrganization = useAtomValue(organizationAtom)

  const organizationId = currentOrganization?.id || ''

  const refreshModules = async () =>
    setModules(await getModules(organizationId))

  const onDelete = (module: ModuleModel) => setForDelete(module)

  const onCreate = async (values: SaveModInput) => {
    if (!values.description) values.description = ''

    const newModule = await createModule(organizationId, values)

    if (!newModule) return

    onCloseNew()
    refreshModules()
  }

  const onDeleteModule = async () => {
    if (!forDelete) return

    const deleted = await deleteModule(organizationId, forDelete.id)
    if (!deleted) return

    setForDelete(undefined)
    refreshModules()
  }

  const onEdit = (forUpdateObject: ModuleModel) => setForUpdate(forUpdateObject)
  const onCloseEdit = () => setForUpdate(undefined)

  const onUpdate = async (input: SaveModInput) => {
    if (!forUpdate) return

    const update = await updateModule(organizationId, forUpdate.id, input)
    if (!update) return

    setForUpdate(undefined)
    refreshModules()
  }

  useEffect(() => {
    if (organizationId)
      getModules(organizationId).then((response) => setModules(response))
  }, [organizationId])

  return {
    openNew,
    onOpenNew,
    onCloseNew,
    loading: getting,
    modules,
    organization: currentOrganization,
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

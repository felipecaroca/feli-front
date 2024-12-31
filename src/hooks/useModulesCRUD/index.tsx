import {
  ModuleModel,
  SaveModInput,
  getModulesService,
  createModuleService,
  updateModuleService,
  deleteModuleService,
  getModuleService,
} from '@/commons'
import { useLoading } from '../useLoading'
import { toaster } from '@/components/ui/toaster'

export const useModulesCRUD = () => {
  const { loading: getting, call: callGet } = useLoading()
  const { loading: gettingOne, call: callGetOne } = useLoading()
  const { loading: creating, call: callCreate } = useLoading()
  const { loading: updating, call: callUpdate } = useLoading()
  const { loading: deleting, call: callDelete } = useLoading()

  const getModules = async (organization: string) => {
    return callGet(
      () => getModulesService(organization),
      () => [] as ModuleModel[]
    )
  }

  const getModule = async (organization: string, id: string) => {
    return callGetOne(
      () => getModuleService(organization, id),
      () => undefined
    )
  }

  const createModule = async (organization: string, data: SaveModInput) => {
    return callCreate(
      () => createModuleService(organization, data),
      () =>
        toaster.create({
          title: 'Error al crear',
          type: 'error',
          description: 'No se pudo crear el módulo, intente mas tarde',
        })
    )
  }

  const updateModule = async (
    organization: string,
    moduleId: string,
    data: SaveModInput
  ) => {
    return callUpdate(
      () => updateModuleService(organization, moduleId, data),
      () =>
        toaster.create({
          title: 'Error al actualizar',
          type: 'error',
          description: 'No se pudo actualizar el módulo, intente mas tarde',
        })
    )
  }

  const deleteModule = async (organization: string, moduleId: string) => {
    return callDelete(
      () => deleteModuleService(organization, moduleId),
      () =>
        toaster.create({
          title: 'Error al eliminar',
          type: 'error',
          description: 'No se pudo eliminar el módulo, intente mas tarde',
        })
    )
  }

  return {
    getModule,
    getModules,
    createModule,
    updateModule,
    deleteModule,
    gettingOne,
    getting,
    creating,
    updating,
    deleting,
  }
}

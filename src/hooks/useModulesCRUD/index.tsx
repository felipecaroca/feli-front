import {
  ModuleModel,
  SaveModInput,
  getModulesService,
  createModuleService,
  updateModuleService,
  deleteModuleService,
} from '@/commons'
import { useLoading } from '../useLoading'

export const useModulesCRUD = () => {
  const { loading: getting, call: callGet } = useLoading()
  const { loading: creating, call: callCreate } = useLoading()
  const { loading: updating, call: callUpdate } = useLoading()
  const { loading: deleting, call: callDelete } = useLoading()

  const getModules = async (organization: string) => {
    return callGet(
      () => getModulesService(organization),
      () => [] as ModuleModel[]
    )
  }

  const createModule = async (organization: string, data: SaveModInput) => {
    return callCreate(
      () => createModuleService(organization, data),
      () => undefined // TODO: manejar feedback de error
    )
  }

  const updateModule = async (
    organization: string,
    moduleId: string,
    data: SaveModInput
  ) => {
    return callUpdate(
      () => updateModuleService(organization, moduleId, data),
      () => undefined // TODO: manejar feedback de error
    )
  }

  const deleteModule = async (organization: string, moduleId: string) => {
    return callDelete(
      () => deleteModuleService(organization, moduleId),
      () => undefined // TODO: manejar feedback de error
    )
  }

  return {
    getModules,
    createModule,
    updateModule,
    deleteModule,
    getting,
    creating,
    updating,
    deleting,
  }
}

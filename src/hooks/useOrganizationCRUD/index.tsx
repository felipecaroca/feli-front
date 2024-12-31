import {
  CreateOrganizationInput,
  createOrganizationService,
  deleteOrganizationService,
  ERROR_MESSAGE,
  getMyOrganizationsService,
  OrganizationModel,
  UpdateOrganizationInput,
  updateOrganizationService,
  getOrganizationByIdService,
} from '@/commons'
import { useLoading } from '../useLoading'
import { toaster } from '@/components/ui/toaster'

export const useOrganizationCRUD = () => {
  const { call: callGet, loading: getting } = useLoading()
  const { call: callGetById, loading: gettingById } = useLoading()
  const { call: callCreate, loading: creating } = useLoading()
  const { call: callUpdate, loading: updating } = useLoading()
  const { call: callDelete, loading: deleting } = useLoading()

  const getMyOrganizations = () =>
    callGet(
      () => getMyOrganizationsService(),
      () => [] as OrganizationModel[]
    )

  const createOrganization = (input: CreateOrganizationInput) =>
    callCreate(
      () => createOrganizationService(input),
      (err) => {
        toaster.create({
          title: '¡Se produjo un error!',
          description:
            ERROR_MESSAGE.ORGANIZATION[
              err?.response?.data?.message || 'UNKNOWN'
            ],
          type: 'error',
          duration: 5000,
        })
      }
    )

  const updateOrganization = (id: string, input: UpdateOrganizationInput) =>
    callUpdate(
      () => updateOrganizationService(id, input),
      () => undefined
    )

  const deleteOrganization = (id: string) =>
    callDelete(
      () => deleteOrganizationService(id),
      () => undefined
    )

  const getOrganizationById = (id: string) =>
    callGetById(
      () => getOrganizationByIdService(id),
      () => undefined
    )

  return {
    getMyOrganizations,
    createOrganization,
    updateOrganization,
    deleteOrganization,
    getOrganizationById,
    getting,
    creating,
    updating,
    deleting,
    gettingById,
  }
}

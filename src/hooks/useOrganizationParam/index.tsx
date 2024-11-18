import { WithOrganizationParam } from '@/commons'
import { useParam } from '../useParam'

export const useOrganizationParam = ({ params }: WithOrganizationParam) => {
  const { param: organization } = useParam(params, 'organization')

  return {
    organization,
  }
}

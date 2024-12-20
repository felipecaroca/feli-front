import { organizationAtom, WithOrganizationParam } from '@/commons'
import { useParam } from '../useParam'
import { useSetAtom } from 'jotai'
import { useEffect } from 'react'

export const useOrganizationParam = ({ params }: WithOrganizationParam) => {
  const { param: organization } = useParam(params, 'organization')
  const setOrganization = useSetAtom(organizationAtom)

  useEffect(() => {
    setOrganization(organization)
  }, [organization])

  return {
    organization,
  }
}

import { WithOrganizationParam } from '@/commons'
import { useEffect, useState } from 'react'

export const useOrganizationParam = ({ params }: WithOrganizationParam) => {
  const [organization, setOrganization] = useState<string>('')

  const getOrganization = async () => {
    const { organization } = await params

    setOrganization(organization)
  }

  useEffect(() => {
    getOrganization()
  }, [])

  return {
    organization,
  }
}

import { OrganizationModel } from '@/commons'
import { useOrganizationCRUD } from '@/hooks/useOrganizationCRUD'
import { useEffect, useState } from 'react'

export const useOrganizationPage = () => {
  const [myOrganizations, setMyOrganizations] = useState<
    OrganizationModel[] | undefined
  >(undefined)
  const { getMyOrganizations, getting } = useOrganizationCRUD()

  useEffect(() => {
    getMyOrganizations().then((organizations) =>
      setMyOrganizations(organizations || [])
    )
  }, [])

  return {
    myOrganizations,
    getting,
  }
}

'use client'

import { WAITINGLINE_URL, OrganizationModel } from '@/commons'
import { useOrganizationCRUD } from '@/hooks/useOrganizationCRUD'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useHomePage = () => {
  const router = useRouter()
  const [organizations, setOrganizations] = useState<OrganizationModel[]>()
  const { getMyOrganizations, getting } = useOrganizationCRUD()

  const onClick = (organization: OrganizationModel) =>
    router.push(`${WAITINGLINE_URL}/${organization.id}`)

  useEffect(() => {
    getMyOrganizations().then((res) => setOrganizations(res || []))
  }, [])

  return {
    onClick,
    getting,
    organizations,
  }
}

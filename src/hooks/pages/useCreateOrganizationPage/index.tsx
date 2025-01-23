'use client'

import { useOrganizationCRUD } from '../../useOrganizationCRUD'
import {
  CreateOrganizationInput,
  MAX_ORGANIZATIONS_ALLOWED,
  ORGANIZATION_URL,
  OrganizationModel,
} from '@/commons'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useCreateOrganizationPage = () => {
  const { createOrganization, creating, getMyOrganizations, getting } =
    useOrganizationCRUD()
  const router = useRouter()
  const [organizations, setOrganizations] = useState<
    OrganizationModel[] | undefined
  >(undefined)

  const onSubmit = async (values: CreateOrganizationInput) => {
    const res = await createOrganization(values)

    if (res?.id) router.push(ORGANIZATION_URL)
  }

  const onBack = () => router.back()

  useEffect(() => {
    getMyOrganizations().then((orgs) => setOrganizations(orgs))
  }, [])

  return {
    onSubmit,
    creating,
    onBack,
    loading: getting && organizations === undefined,
    canCreateNew:
      !getting &&
      organizations !== undefined &&
      organizations.length < MAX_ORGANIZATIONS_ALLOWED,
  }
}

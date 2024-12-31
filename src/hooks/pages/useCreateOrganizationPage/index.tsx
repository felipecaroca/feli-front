'use client'

import { useOrganizationCRUD } from '../../useOrganizationCRUD'
import { CreateOrganizationInput, ORGANIZATION_URL } from '@/commons'
import { useRouter } from 'next/navigation'

export const useCreateOrganizationPage = () => {
  const { createOrganization, creating } = useOrganizationCRUD()
  const router = useRouter()

  const onSubmit = async (values: CreateOrganizationInput) => {
    const res = await createOrganization(values)

    if (res?.id) router.push(ORGANIZATION_URL)
  }

  return {
    onSubmit,
    creating,
  }
}

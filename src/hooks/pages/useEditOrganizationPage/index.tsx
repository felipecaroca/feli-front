'use client'

import {
  ORGANIZATION_URL,
  OrganizationModel,
  UpdateOrganizationInput,
} from '@/commons'
import { useOrganizationCRUD } from '@/hooks'
import { useParams, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'

export const useEditOrganizationPage = () => {
  const { id } = useParams()
  const router = useRouter()
  const [organization, setOrganization] = useState<
    OrganizationModel | undefined
  >()
  const { getOrganizationById, gettingById, updateOrganization, updating } =
    useOrganizationCRUD()

  const onUpdateOrganization = async (values: UpdateOrganizationInput) => {
    if (!id) return

    const res = await updateOrganization(id.toString(), values)

    if (res) router.push(`${ORGANIZATION_URL}`)
  }

  useEffect(() => {
    if (id) {
      getOrganizationById(id.toString()).then((res) => setOrganization(res))
    }
  }, [id])

  return {
    organization,
    gettingById,
    onUpdateOrganization,
    updating,
  }
}

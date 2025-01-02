'use client'

import {
  ORGANIZATION_URL,
  organizationAtom,
  OrganizationModel,
} from '@/commons'
import { useOrganizationCRUD } from '@/hooks/useOrganizationCRUD'
import { useAtomValue } from 'jotai'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useOrganizationPage = () => {
  const [myOrganizations, setMyOrganizations] = useState<
    OrganizationModel[] | undefined
  >(undefined)
  const currentOrganization = useAtomValue(organizationAtom)
  const [forDelete, setForDelete] = useState<OrganizationModel | undefined>(
    undefined
  )
  const router = useRouter()
  const { getMyOrganizations, getting, deleteOrganization, deleting } =
    useOrganizationCRUD()

  useEffect(() => {
    getOrganizations()
  }, [])

  const getOrganizations = () => {
    getMyOrganizations().then((organizations) =>
      setMyOrganizations(organizations || [])
    )
  }

  const onDelete = (orgForDelete: OrganizationModel) =>
    setForDelete(orgForDelete)
  const onCancel = () => setForDelete(undefined)
  const onDeleteOrganization = async () => {
    if (!forDelete) return

    const res = await deleteOrganization(forDelete.id)

    if (res) {
      setForDelete(undefined)
      getOrganizations()
    }
  }

  const onEdit = (org: OrganizationModel) => {
    router.push(`${ORGANIZATION_URL}/edit/${org.id}`)
  }

  const onNew = () => router.push(`${ORGANIZATION_URL}/create`)

  return {
    myOrganizations,
    getting,
    confirmIsOpen: !!forDelete,
    forDelete,
    deleting,
    currentOrganization,
    onDelete,
    onCancel,
    onDeleteOrganization,
    onEdit,
    onNew,
  }
}

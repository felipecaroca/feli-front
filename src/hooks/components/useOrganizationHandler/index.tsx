'use client'

import { organizationAtom, OrganizationModel } from '@/commons'
import { useDisclosure, useOrganizationCRUD } from '@/hooks'

import { useAtom } from 'jotai'
import { useEffect, useState } from 'react'

export const useOrganizationHandler = () => {
  const [myOrganizations, setMyOrganizations] = useState<
    OrganizationModel[] | undefined
  >(undefined)
  const { onClose, onOpen, open } = useDisclosure()

  const { getMyOrganizations, getting } = useOrganizationCRUD()
  const [currentOrganization, setCurrentOrganization] =
    useAtom(organizationAtom)

  useEffect(() => {
    getOrganizations()
  }, [])

  const getOrganizations = () => {
    getMyOrganizations().then((organizations) =>
      setMyOrganizations(organizations || [])
    )
  }

  const selectOrganization = (newOrganization: OrganizationModel) => {
    setCurrentOrganization(newOrganization)
    onClose()
  }

  return {
    myOrganizations,
    open,
    onClose,
    onOpen,
    loading: getting,
    currentOrganization,
    selectOrganization,
  }
}

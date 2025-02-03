'use client'

import { useParams } from 'next/navigation'

export const useOrganizationParam = () => {
  const { organization } = useParams()

  return {
    organization: organization?.toString() || '',
  }
}

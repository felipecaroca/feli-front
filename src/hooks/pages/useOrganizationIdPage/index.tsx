'use client'

import { MenuItem } from '@/commons'
import { useOrganizationParam } from '@/hooks'
import { useRouter } from 'next/navigation'

export const useOrganizationIdPage = () => {
  const router = useRouter()
  const { organization } = useOrganizationParam()

  const onClick = (item: MenuItem) => {
    router.push(`${organization}/${item.path}`)
  }

  return {
    onClick,
  }
}

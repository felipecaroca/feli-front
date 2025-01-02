'use client'

import { MenuItem, WAITINGLINE_URL } from '@/commons'

import { useRouter } from 'next/navigation'

export const useHomePage = () => {
  const router = useRouter()

  const onClick = (item: MenuItem) => {
    router.push(`${WAITINGLINE_URL}/${item.path}`)
  }

  return {
    onClick,
  }
}

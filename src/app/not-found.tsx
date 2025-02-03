'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (router) router.replace('/login')
  }, [router])

  return 'vamo al login'
}

export default NotFoundPage

'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const NotFoundPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.replace('/login')
  }, [])

  return 'vamo al login'
}

export default NotFoundPage

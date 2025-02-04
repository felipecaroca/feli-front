'use client'

import { ORGANIZATION_URL } from '@/commons'
import { useSession } from '@/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

const LoginSetPage = () => {
  const searchParams = useSearchParams()
  const { saveToken, user } = useSession()
  const router = useRouter()

  useEffect(() => {
    const token = searchParams.get('token')

    if (token) saveToken(token)
  }, [searchParams, saveToken])

  useEffect(() => {
    if (user) {
      const returnUrl = searchParams.get('returnUrl')
      router.replace(returnUrl || ORGANIZATION_URL) //TODO: revisar la redirección por default
    }
  }, [user, router, searchParams])

  return null
}

export default LoginSetPage

'use client'

import { HOME_URL } from '@/commons'
import { useSession } from '@/hooks'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect } from 'react'

const LoginSetPage = () => {
  return (
    <Suspense>
      <LoginSetContent />
    </Suspense>
  )
}

const LoginSetContent = () => {
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
      router.replace(returnUrl || HOME_URL)
    }
  }, [user, router, searchParams])

  return null
}

export default LoginSetPage

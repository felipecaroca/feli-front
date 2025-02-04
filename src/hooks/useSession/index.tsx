'use client'

import { authTokenAtom, authUserAtom, getMe } from '@/commons'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { googleLogout } from '@react-oauth/google'

import { useEffect } from 'react'

export const useSession = (noRedirect?: boolean) => {
  const [token, setToken] = useAtom(authTokenAtom)
  const [user, setUser] = useAtom(authUserAtom)
  const router = useRouter()

  const goToLogin = () => {
    if (location.pathname === '/login') return

    router.replace(`/login?returnUrl=${location.pathname}`)
  }

  useEffect(() => {
    if (token) {
      getMe()
        .then((res) => setUser(res))
        .catch(() => !noRedirect && goToLogin())
    } else if (!noRedirect) goToLogin()
  }, [token])

  return {
    user,
    token: token,
    saveToken: (token: string) => setToken(token),
    logout: () => {
      googleLogout()
      setUser(undefined)
      setToken(undefined)
    },
  }
}

import { authTokenAtom, authUserAtom, getMe } from '@/commons'
import { useAtom } from 'jotai'
import { useRouter } from 'next/navigation'
import { googleLogout } from '@react-oauth/google'

import { useEffect } from 'react'

export const useSession = () => {
  const [token, setToken] = useAtom(authTokenAtom)
  const [user, setUser] = useAtom(authUserAtom)
  const router = useRouter()

  const goToLogin = () => {
    router.replace('/login')
  }

  useEffect(() => {
    if (token) {
      getMe()
        .then((res) => setUser(res))
        .catch(() => goToLogin())
    } else goToLogin()
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

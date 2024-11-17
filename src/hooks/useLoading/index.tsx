import { AxiosError } from 'axios'
import { useState } from 'react'

export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const call = async <T, TT>(
    func: () => Promise<T>,
    errFunc: (error: unknown) => TT
  ) => {
    try {
      setLoading(true)
      const response = await func()

      return response
    } catch (err) {
      console.error('ERROR_MESSAGE', (err as AxiosError).message)
      return errFunc(err)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    call,
  }
}

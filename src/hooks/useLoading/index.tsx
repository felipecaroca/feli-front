'use client'

import { AxiosError } from 'axios'
import { useState } from 'react'

export const useLoading = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const call = async <T, TT>(
    func: () => Promise<T>,
    errFunc: (error: AxiosError<{ message: string }>) => TT
  ) => {
    try {
      setLoading(true)
      const response = await func()

      return response
    } catch (err) {
      console.error(
        'ERROR_MESSAGE',
        err,
        (err as AxiosError<{ message: string }>).response?.data?.message
      )
      return errFunc(err as AxiosError<{ message: string }>)
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    call,
  }
}

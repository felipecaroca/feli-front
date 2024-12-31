'use client'

import { useEffect, useState } from 'react'

export const useParam = <T,>(params: T, key: keyof T) => {
  const [param, setParam] = useState<string>('')

  const getParam = async () => {
    const paramsAwaited = await params
    const paramFromKey = paramsAwaited[key]

    setParam(paramFromKey as string)
  }

  useEffect(() => {
    getParam()
  }, [])

  return {
    param,
  }
}

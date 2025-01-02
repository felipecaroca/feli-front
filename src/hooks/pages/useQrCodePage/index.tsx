'use client'

import { organizationAtom, WAITINGLINE_URL } from '@/commons'
import { useIsFullScreen } from '@/hooks'

import { useAtomValue } from 'jotai'
import { useEffect, useState } from 'react'

export const useQrCodePage = () => {
  const [qrValue, setQrValue] = useState<string | undefined>()
  const currentOrganization = useAtomValue(organizationAtom)
  const organizationId = currentOrganization?.id || ''

  const [hidden, setHidden] = useState<boolean>(false)
  const { isFullScreen } = useIsFullScreen()

  useEffect(() => {
    if (hidden) {
      window?.print()
      setHidden(false)
    }
  }, [hidden])

  const showForManager = !hidden && !isFullScreen

  useEffect(() => {
    if (organizationId)
      setQrValue(
        `${process.env.NEXT_PUBLIC_WAITING_LINE_FRONT}${WAITINGLINE_URL}/${organizationId}/take-attention/check`
      )
  }, [organizationId])

  return {
    qrValue,
    showForManager,
    hidden,
    setHidden,
  }
}

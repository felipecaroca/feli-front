import { WAITINGLINE_URL, WithOrganizationParam } from '@/commons'
import { useOrganizationParam } from '@/hooks/useOrganizationParam'
import { useEffect, useState } from 'react'

export const useQrCodePage = (props: WithOrganizationParam) => {
  const [qrValue, setQrValue] = useState<string | undefined>()
  const { organization } = useOrganizationParam(props)

  useEffect(() => {
    if (organization)
      setQrValue(
        `${process.env.NEXT_PUBLIC_WAITING_LINE_FRONT}/${WAITINGLINE_URL}/${organization}/take-attention/check`
      )
  }, [organization])

  return {
    qrValue,
  }
}

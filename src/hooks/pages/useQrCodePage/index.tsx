import { WithOrganizationParam } from '@/commons'
import { useOrganizationParam } from '@/hooks/useOrganizationParam'
import { useEffect, useState } from 'react'

export const useQrCodePage = (props: WithOrganizationParam) => {
  const [qrValue, setQrValue] = useState<string | undefined>()
  const { organization } = useOrganizationParam(props)

  useEffect(() => {
    if (organization)
      setQrValue(
        `${process.env.WAITING_LINE_FRONT}/${organization}/take-attention?id=12345674897546132`
      )
  }, [organization])

  return {
    qrValue,
  }
}

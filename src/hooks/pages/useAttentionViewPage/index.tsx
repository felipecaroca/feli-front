import {
  AttentionModel,
  AttentionStatusEnum,
  WithModuleParam,
  WithOrganizationParam,
} from '@/commons'
import { useAttentionsCRUD, useOrganizationParam, useSocket } from '@/hooks'
import { useEffect, useState } from 'react'

export const useAttentionViewPage = (
  props: WithModuleParam & WithOrganizationParam
) => {
  const { organization } = useOrganizationParam(props)
  const { getAttentions, getting } = useAttentionsCRUD()
  const [attentions, setAttentions] = useState<AttentionModel[]>([])
  const { socket } = useSocket()

  useEffect(() => {
    if (organization)
      getAttentions(organization).then((attentionsFound) =>
        setAttentions(attentionsFound || [])
      )
  }, [organization])

  useEffect(() => {
    if (socket && organization) {
      socket.on(`${organization}-attentions`, (data: AttentionModel) => {
        setAttentions((prev) => [...prev.filter((i) => i.id !== data.id), data])
      })

      socket.on(`${organization}-attentions-reset`, (moduleId) => {
        console.log({ moduleId })
        setAttentions((prev) =>
          moduleId
            ? prev.filter((attention) => attention.moduleId !== moduleId)
            : []
        )
      })
    }
  }, [socket, organization])

  return {
    waitting: attentions.filter(
      (attention) => attention.status === AttentionStatusEnum.WAITING
    ),
    attending: attentions.filter(
      (attention) => attention.status === AttentionStatusEnum.ATTENDING
    ),
    getting,
  }
}

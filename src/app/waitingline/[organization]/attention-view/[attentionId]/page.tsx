'use client'

import { WithAttentionParam, WithOrganizationParam } from '@/commons'
import {
  AcceptAudioButtonComponent,
  FullScreenCenterComponent,
} from '@/components'
import { AttentionTicketComponent } from '@/components/AttentionTicket'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { useYourAttentionPage } from '@/hooks'
import { FC } from 'react'

const YourAttetionPage: FC<WithOrganizationParam & WithAttentionParam> = (
  props
) => {
  const { attention, loading, acceptAudio, isServiceWorkerCompatible } =
    useYourAttentionPage(props)

  return (
    <FullScreenCenterComponent>
      {loading ? (
        <SkeletonSquare noOfLines={2} w={200} h={200} />
      ) : (
        <>
          <AttentionTicketComponent {...{ attention }} />

          <AcceptAudioButtonComponent
            {...{ isServiceWorkerCompatible, acceptAudio }}
          />
        </>
      )}
    </FullScreenCenterComponent>
  )
}

export default YourAttetionPage

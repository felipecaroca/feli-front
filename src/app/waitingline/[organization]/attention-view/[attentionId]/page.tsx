'use client'

import { WithAttentionParam, WithOrganizationParam } from '@/commons'
import {
  AcceptAudioButtonComponent,
  AttentionTicketComponent,
  FullScreenCenterComponent,
  SkeletonComponent,
} from '@/components'

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
        <SkeletonComponent noOfLines={2} width="200px" height="200px" />
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

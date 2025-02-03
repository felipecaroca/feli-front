'use client'

import {
  AcceptAudioButtonComponent,
  AttentionTicketComponent,
  FullScreenCenterComponent,
  SkeletonComponent,
} from '@/components'

import { useYourAttentionPage } from '@/hooks'

const YourAttetionPage = () => {
  const { attention, loading, acceptAudio, isServiceWorkerCompatible } =
    useYourAttentionPage()

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

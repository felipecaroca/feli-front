'use client'

import {
  renderAttentionNumber,
  WithAttentionParam,
  WithOrganizationParam,
} from '@/commons'
import { FullScreenCenterComponent } from '@/components'
import { Button } from '@/components/ui/button'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { useYourAttentionPage } from '@/hooks'
import { FC } from 'react'

const YourAttetionPage: FC<WithOrganizationParam & WithAttentionParam> = (
  props
) => {
  const { attention, loading } = useYourAttentionPage(props)

  return (
    <FullScreenCenterComponent>
      {loading ? (
        <SkeletonSquare noOfLines={2} w={200} h={200} />
      ) : (
        `You atención ${renderAttentionNumber(attention)}`
      )}
      <Button>TODO: Mostrar si service worker no es compatible</Button>
    </FullScreenCenterComponent>
  )
}

export default YourAttetionPage

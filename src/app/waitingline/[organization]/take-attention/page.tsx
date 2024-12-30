'use client'

import { WithModuleParam, WithOrganizationParam } from '@/commons'
import {
  AttentionFormComponent,
  FullScreenCenterComponent,
  TitleComponent,
} from '@/components'

import { useTakeAttentionPage } from '@/hooks'

import { FC } from 'react'

const TakeAttetionPage: FC<WithOrganizationParam & WithModuleParam> = (
  props
) => {
  const { onSubmit, creating: loading } = useTakeAttentionPage(props)

  return (
    <FullScreenCenterComponent>
      <TitleComponent mb={14}>
        Agrega tu nombre para tomar tu atención
      </TitleComponent>

      <AttentionFormComponent {...{ onSubmit, loading }} />
    </FullScreenCenterComponent>
  )
}

export default TakeAttetionPage

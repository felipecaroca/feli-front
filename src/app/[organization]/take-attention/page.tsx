'use client'

import { WithOrganizationParam } from '@/commons'
import {
  AttentionFormComponent,
  FullScreenCenterComponent,
  TitleComponent,
} from '@/components'
import { useTakeAttentionPage } from '@/hooks'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'

const TakeAttetionPage: FC<WithOrganizationParam> = (props) => {
  const { onSubmit, creating: loading } = useTakeAttentionPage(props)

  return (
    <FullScreenCenterComponent>
      <Box mb={14}>
        <TitleComponent>Agrega tu nombre para tomar tu atención</TitleComponent>
      </Box>
      <AttentionFormComponent {...{ onSubmit, loading }} />
    </FullScreenCenterComponent>
  )
}

export default TakeAttetionPage

'use client'

import {
  AttentionFormComponent,
  FullScreenCenterComponent,
  TitleComponent,
} from '@/components'

import { useTakeAttentionPage } from '@/hooks'
import { Box } from '@chakra-ui/react'

const TakeAttetionWithModulePage = () => {
  const { onSubmit, creating: loading } = useTakeAttentionPage()

  return (
    <FullScreenCenterComponent>
      <Box mb={14}>
        <TitleComponent>Agrega tu nombre para tomar tu atención</TitleComponent>
      </Box>

      <AttentionFormComponent {...{ onSubmit, loading }} />
    </FullScreenCenterComponent>
  )
}

export default TakeAttetionWithModulePage

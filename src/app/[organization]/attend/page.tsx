'use client'

import {
  FullScreenCenterComponent,
  ModulesListComponent,
  TitleComponent,
} from '@/components'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { PageProps } from './types'
import { useAttendPage } from '@/hooks'

const AttendPage: FC<PageProps> = (props) => {
  const { organization, modules, getting, onCardClick } = useAttendPage(props)

  return (
    <FullScreenCenterComponent>
      <Box mb={14}>
        <TitleComponent>
          Atención de la organización {organization || ''}
        </TitleComponent>
      </Box>
      <ModulesListComponent
        {...{
          loading: getting,
          modules,
          onCardClick,
        }}
      />
    </FullScreenCenterComponent>
  )
}

export default AttendPage

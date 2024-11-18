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
  const { modules, getting, onCardClick } = useAttendPage(props)

  return (
    <FullScreenCenterComponent>
      <Box mb={14}>
        <TitleComponent>
          {getting
            ? 'Comprobando si tienes módulos'
            : modules?.length === 0
              ? ''
              : 'Selecciona el módulo de atención'}
        </TitleComponent>
      </Box>

      <ModulesListComponent
        {...{
          loading: getting,
          modules: modules || [],
          onCardClick,
        }}
      />
    </FullScreenCenterComponent>
  )
}

export default AttendPage

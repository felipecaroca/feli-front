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
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'

const AttendPage: FC<PageProps> = (props) => {
  const { modules, getting, hasModules, onCardClick } = useAttendPage(props)

  return (
    <ProtectedRouteComponent>
      <FullScreenCenterComponent>
        <Box mb={14}>
          {hasModules && (
            <TitleComponent>Selecciona el módulo de atención</TitleComponent>
          )}
        </Box>

        <ModulesListComponent
          {...{
            loading: getting,
            modules: modules || [],
            onCardClick,
          }}
        />
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default AttendPage

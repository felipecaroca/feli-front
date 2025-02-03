'use client'

import {
  ModulesListComponent,
  NeedOrganizationComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { useAttendPage } from '@/hooks'

const AttendPage: FC = () => {
  const { modules, getting, hasModules, onCardClick } = useAttendPage()

  return (
    <ProtectedRouteComponent>
      <NeedOrganizationComponent>
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
      </NeedOrganizationComponent>
    </ProtectedRouteComponent>
  )
}

export default AttendPage

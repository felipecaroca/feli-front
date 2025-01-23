'use client'

import { ModulesListComponent, TitleComponent } from '@/components'
import { Box } from '@chakra-ui/react'
import { FC } from 'react'
import { useAttendPage } from '@/hooks'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'
import NeedOrganizationComponent from '@/components/NeedOrganization'

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

'use client'

import { WithModuleParam, WithOrganizationParam } from '@/commons'
import {
  AttentionListComponent,
  FullScreenCenterComponent,
  TitleComponent,
} from '@/components'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'
import { useAttentionViewPage } from '@/hooks'
import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'

const AttentionViewPage: FC<WithOrganizationParam & WithModuleParam> = (
  props
) => {
  const { waitting, attending, getting } = useAttentionViewPage(props)

  return (
    <ProtectedRouteComponent hideUserSession>
      <FullScreenCenterComponent>
        <Box mb={14}>
          <TitleComponent>Sala de espera</TitleComponent>
        </Box>
        <Flex w="full" justify="space-between" alignItems="start" gap={2}>
          <Box w="full">
            <TitleComponent mb="40px">Atendiendo</TitleComponent>
            <AttentionListComponent {...{ attentions: attending, getting }} />
          </Box>
          <Box w="4px" bg="gray.300" h="full" borderRadius={6} />
          <Box w="full" px="10px">
            <TitleComponent mb="40px">Próximas atenciones</TitleComponent>
            <AttentionListComponent {...{ attentions: waitting, getting }} />
          </Box>
        </Flex>
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default AttentionViewPage

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

const AttentionViewPage: FC = () => {
  const { waitting, attending, getting } = useAttentionViewPage()

  return (
    <ProtectedRouteComponent hideUserSession>
      <FullScreenCenterComponent>
        <Box mb={14}>
          <TitleComponent>Sala de espera</TitleComponent>
        </Box>
        <Flex
          w="full"
          justify="space-between"
          alignItems="start"
          gap={2}
          wrap="wrap"
        >
          <Box w={['full', 'full', '48%']}>
            <TitleComponent mb="40px">Atendiendo</TitleComponent>
            <AttentionListComponent {...{ attentions: attending, getting }} />
          </Box>
          <Box w="2px" bg="gray.300" h={[0, 0, 'full']} borderRadius={6} />
          <Box w={['full', 'full', '48%']} px="10px">
            <TitleComponent mb="40px">Próximas atenciones</TitleComponent>
            <AttentionListComponent {...{ attentions: waitting, getting }} />
          </Box>
        </Flex>
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default AttentionViewPage

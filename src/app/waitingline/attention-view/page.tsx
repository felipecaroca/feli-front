'use client'

import {
  AttentionListComponent,
  BoxComponent,
  NeedOrganizationComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'

import { useAttentionViewPage } from '@/hooks'
import { Box, Flex } from '@chakra-ui/react'
import { FC } from 'react'

const AttentionViewPage: FC = () => {
  const { waitting, attending, getting } = useAttentionViewPage()

  return (
    <ProtectedRouteComponent hideUserSession>
      <NeedOrganizationComponent>
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
            <BoxComponent padding="0 0 40px 0">
              <TitleComponent>Atendiendo</TitleComponent>
            </BoxComponent>
            <AttentionListComponent {...{ attentions: attending, getting }} />
          </Box>
          <Box w="2px" bg="gray.300" h={[0, 0, 'full']} borderRadius={6} />
          <Box w={['full', 'full', '48%']} px="10px">
            <BoxComponent padding="0 0 40px 0">
              <TitleComponent>Próximas atenciones</TitleComponent>
            </BoxComponent>
            <AttentionListComponent {...{ attentions: waitting, getting }} />
          </Box>
        </Flex>
      </NeedOrganizationComponent>
    </ProtectedRouteComponent>
  )
}

export default AttentionViewPage

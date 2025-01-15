'use client'

import {
  OrganizationFormComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'

import { useCreateOrganizationPage } from '@/hooks'
import { Box, Flex } from '@chakra-ui/react'

const CreateOrganizationPage = () => {
  const { onSubmit, creating } = useCreateOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <Flex justify="center" px="20px">
        <Box>
          <TitleComponent>Crear nueva organización</TitleComponent>
          <OrganizationFormComponent {...{ loading: creating, onSubmit }} />
        </Box>
      </Flex>
    </ProtectedRouteComponent>
  )
}

export default CreateOrganizationPage

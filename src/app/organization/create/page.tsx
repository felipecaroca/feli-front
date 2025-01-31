'use client'

import {
  OrganizationFormComponent,
  ProtectedRouteComponent,
  SkeletonComponent,
  TitleComponent,
} from '@/components'

import { Button } from '@/components/ui/button'

import { useCreateOrganizationPage } from '@/hooks'
import { Box, Flex } from '@chakra-ui/react'

const CreateOrganizationPage = () => {
  const { onSubmit, creating, canCreateNew, onBack, loading } =
    useCreateOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <Flex justify="center" px="20px">
        {loading ? (
          <SkeletonComponent width="300px" height="300px" noOfLines={1} />
        ) : canCreateNew ? (
          <Box>
            <TitleComponent>Crear nueva organización</TitleComponent>
            <OrganizationFormComponent {...{ loading: creating, onSubmit }} />
          </Box>
        ) : (
          <Box>
            <TitleComponent>No puedes crear mas organizaciones</TitleComponent>
            <Button
              onClick={onBack}
              colorPalette="blue"
              variant="outline"
              mt="40px"
            >
              Volver
            </Button>
          </Box>
        )}
      </Flex>
    </ProtectedRouteComponent>
  )
}

export default CreateOrganizationPage

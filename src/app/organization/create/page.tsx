'use client'

import {
  OrganizationFormComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'
import { Button } from '@/components/ui/button'
import { SkeletonSquare } from '@/components/ui/skeleton'

import { useCreateOrganizationPage } from '@/hooks'
import { Box, Flex } from '@chakra-ui/react'

const CreateOrganizationPage = () => {
  const { onSubmit, creating, canCreateNew, onBack, loading } =
    useCreateOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <Flex justify="center" px="20px">
        {loading ? (
          <SkeletonSquare w="300px" h="300px" noOfLines={1} />
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

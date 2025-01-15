'use client'

import {
  OrganizationFormComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'
import { useEditOrganizationPage } from '@/hooks'
import { Box, Flex } from '@chakra-ui/react'

const EditOrganizationPage = () => {
  const { organization, onUpdateOrganization, updating } =
    useEditOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <Flex justify="center">
        <Box>
          <TitleComponent>
            Editar organización {organization?.name}
          </TitleComponent>
          {organization && (
            <OrganizationFormComponent
              loading={updating}
              onSubmit={onUpdateOrganization}
              defaultValues={organization}
              buttonText="Guardar cambios"
            />
          )}
        </Box>
      </Flex>
    </ProtectedRouteComponent>
  )
}

export default EditOrganizationPage

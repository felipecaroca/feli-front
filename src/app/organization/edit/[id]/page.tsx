'use client'

import {
  BoxComponent,
  FlexComponent,
  OrganizationFormComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'
import { useEditOrganizationPage } from '@/hooks'

const EditOrganizationPage = () => {
  const { organization, onUpdateOrganization, updating } =
    useEditOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <FlexComponent justify="center">
        <BoxComponent>
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
        </BoxComponent>
      </FlexComponent>
    </ProtectedRouteComponent>
  )
}

export default EditOrganizationPage

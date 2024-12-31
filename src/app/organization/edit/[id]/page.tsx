'use client'

import { CreateOrganizationInput } from '@/commons'
import {
  FullScreenCenterComponent,
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
      <FullScreenCenterComponent>
        <TitleComponent>
          Editar organización {organization?.name}
        </TitleComponent>
        {organization && (
          <OrganizationFormComponent
            loading={updating}
            onSubmit={onUpdateOrganization}
            defaultValues={organization}
            buttonText="Editar"
          />
        )}
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default EditOrganizationPage

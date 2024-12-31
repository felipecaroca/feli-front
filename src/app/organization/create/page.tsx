'use client'

import {
  FullScreenCenterComponent,
  OrganizationFormComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'

import { useCreateOrganizationPage } from '@/hooks'

const CreateOrganizationPage = () => {
  const { onSubmit, creating } = useCreateOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <FullScreenCenterComponent>
        <TitleComponent>Crear nueva organización</TitleComponent>
        <OrganizationFormComponent {...{ loading: creating, onSubmit }} />
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default CreateOrganizationPage

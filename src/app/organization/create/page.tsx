'use client'

import {
  BoxComponent,
  ButtonComponent,
  FlexComponent,
  OrganizationFormComponent,
  ProtectedRouteComponent,
  SkeletonComponent,
  TitleComponent,
} from '@/components'

import { useCreateOrganizationPage } from '@/hooks'

const CreateOrganizationPage = () => {
  const { onSubmit, creating, canCreateNew, onBack, loading } =
    useCreateOrganizationPage()

  return (
    <ProtectedRouteComponent>
      <FlexComponent justify="center" padding="0 20px">
        {loading ? (
          <SkeletonComponent width="300px" height="300px" noOfLines={1} />
        ) : canCreateNew ? (
          <BoxComponent>
            <TitleComponent>Crear nueva organización</TitleComponent>
            <OrganizationFormComponent {...{ loading: creating, onSubmit }} />
          </BoxComponent>
        ) : (
          <BoxComponent>
            <TitleComponent>No puedes crear mas organizaciones</TitleComponent>
            <BoxComponent padding="40px 0 0 0">
              <ButtonComponent onClick={onBack}>Volver</ButtonComponent>
            </BoxComponent>
          </BoxComponent>
        )}
      </FlexComponent>
    </ProtectedRouteComponent>
  )
}

export default CreateOrganizationPage

'use client'

import {
  FormControllerCompnent,
  FullScreenCenterComponent,
  ProtectedRouteComponent,
  TitleComponent,
} from '@/components'
import { Button } from '@/components/ui/button'
import { useCreateOrganizationPage } from '@/hooks'
import { Input } from '@chakra-ui/react'

const CreateOrganizationPage = () => {
  const { handleSubmit, onSubmit, control, creating } =
    useCreateOrganizationPage()

  // TODO: crear componente para el form de la organización

  return (
    <ProtectedRouteComponent>
      <FullScreenCenterComponent>
        <TitleComponent>Crear nueva organización</TitleComponent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControllerCompnent
            {...{ name: 'name', control, label: 'Nombre' }}
          >
            {({ field: { onBlur, onChange, value } }) => (
              <Input
                {...{
                  onChange,
                  onBlur,
                  value: value || '',
                  placeholder: 'Nombre...',
                }}
              />
            )}
          </FormControllerCompnent>
          <Button type="submit" w="full" loading={creating}>
            Crear
          </Button>
        </form>
      </FullScreenCenterComponent>
    </ProtectedRouteComponent>
  )
}

export default CreateOrganizationPage

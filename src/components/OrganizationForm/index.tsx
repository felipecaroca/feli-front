import { Input } from '@chakra-ui/react'
import { FormControllerCompnent } from '../FormController'
import { Button } from '../ui/button'
import { FC } from 'react'
import { ComponentProps } from './types'
import { useOrganizationForm } from '@/hooks'

export const OrganizationFormComponent: FC<ComponentProps> = ({
  loading,
  onSubmit,
  buttonText,
  defaultValues,
}) => {
  const { handleSubmit, control } = useOrganizationForm(defaultValues)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControllerCompnent {...{ name: 'name', control, label: 'Nombre' }}>
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
      <Button type="submit" w="full" loading={loading}>
        {buttonText || 'Crear'}
      </Button>
    </form>
  )
}

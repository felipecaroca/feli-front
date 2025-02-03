import { FC } from 'react'
import { ComponentProps } from './types'
import { Textarea, Input } from '@chakra-ui/react'
import { useModuleForm } from '@/hooks'
import { FormControllerComponent } from '../FormController'
import { ButtonComponent } from '../Button'
import { BoxComponent } from '../Box'
import { FlexComponent } from '../Flex'

export const ModuleFormComponent: FC<ComponentProps> = ({
  onSubmit,
  loading,
  defaultValues,
}) => {
  const { control, handleSubmit } = useModuleForm(defaultValues)

  return (
    <BoxComponent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControllerComponent
          {...{ name: 'name', control, label: 'Nombre del módulo' }}
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
        </FormControllerComponent>

        <FormControllerComponent
          {...{ name: 'prefix', label: 'Prefijo', control }}
        >
          {({ field: { onBlur, onChange, value } }) => (
            <Input
              {...{
                onChange,
                onBlur,
                value: value || '',
                placeholder: 'Prefijo...',
              }}
            />
          )}
        </FormControllerComponent>

        <FormControllerComponent
          {...{ name: 'description', label: 'Descripción', control }}
        >
          {({ field: { onChange, onBlur, value } }) => (
            <Textarea
              {...{
                onChange,
                onBlur,
                value: value || '',
                placeholder: 'Descripción del módulo...',
              }}
            />
          )}
        </FormControllerComponent>

        <FlexComponent justify="end">
          <BoxComponent padding="10px 0 0 0">
            <ButtonComponent type="submit" {...{ loading }}>
              Guardar
            </ButtonComponent>
          </BoxComponent>
        </FlexComponent>
      </form>
    </BoxComponent>
  )
}

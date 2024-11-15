import { FC } from 'react'
import { ComponentProps } from './types'
import { Box, Textarea, Input } from '@chakra-ui/react'
import { Controller } from 'react-hook-form'
import { useModuleForm } from '@/hooks'
import { Button } from '../ui/button'
import { Field } from '../ui/field'

export const ModuleFormComponent: FC<ComponentProps> = ({ onSubmit }) => {
  const { control, handleSubmit } = useModuleForm()
  // TODO: crear componente para no repetir tanto el controlador
  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          render={({
            field: { onBlur, onChange, value },
            fieldState: { error },
          }) => (
            <Field
              py={2}
              label="Nombre del módulo"
              invalid={!!error?.message}
              errorText={error?.message}
            >
              <Input
                {...{
                  onChange,
                  onBlur,
                  value: value || '',
                  placeholder: 'Nombre...',
                }}
              />
            </Field>
          )}
        />
        <Controller
          name="prefix"
          control={control}
          render={({
            field: { onBlur, onChange, value },
            fieldState: { error },
          }) => (
            <Field
              py={2}
              label="Prefijo"
              invalid={!!error?.message}
              errorText={error?.message}
            >
              <Input
                {...{
                  onChange,
                  onBlur,
                  value: value || '',
                  placeholder: 'Prefijo...',
                }}
              />
            </Field>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({
            field: { onBlur, onChange, value },
            fieldState: { error },
          }) => (
            <Field
              py={2}
              label="Descripción"
              invalid={!!error?.message}
              errorText={error?.message}
            >
              <Textarea
                {...{
                  onChange,
                  onBlur,
                  value: value || '',
                  placeholder: 'Descripción del módulo...',
                }}
              />
            </Field>
          )}
        />
        <Box py={2}>
          <Button type="submit">Guardar</Button>
        </Box>
      </form>
    </Box>
  )
}

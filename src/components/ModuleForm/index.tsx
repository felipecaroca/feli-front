import { FC } from 'react'
import { ComponentProps } from './types'
import { Box, Textarea, Input, Flex } from '@chakra-ui/react'
import { useModuleForm } from '@/hooks'
import { Button } from '../ui/button'
import { FormControllerCompnent } from '../FormController'

export const ModuleFormComponent: FC<ComponentProps> = ({
  onSubmit,
  loading,
  defaultValues,
}) => {
  console.log(defaultValues)
  const { control, handleSubmit } = useModuleForm(defaultValues)

  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControllerCompnent
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
        </FormControllerCompnent>

        <FormControllerCompnent
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
        </FormControllerCompnent>

        <FormControllerCompnent
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
        </FormControllerCompnent>

        <Flex justify="end" py={2}>
          <Button type="submit" {...{ loading }}>
            Guardar
          </Button>
        </Flex>
      </form>
    </Box>
  )
}

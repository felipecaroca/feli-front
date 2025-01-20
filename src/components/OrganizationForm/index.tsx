import { Box, Flex, Input } from '@chakra-ui/react'
import { FormControllerComponent } from '../FormController'
import { Button } from '../ui/button'
import { FC } from 'react'
import { ComponentProps } from './types'
import { useOrganizationForm } from '@/hooks'
import { APP_NAMES, APP_PERMISSIONS, MAX_COLABORATORS_ALLOWED } from '@/commons'
import { Checkbox } from '../ui/checkbox'
import { ErrorMessageComponent } from '../ErrorMessage'

// TODO: refactorizar para que quede ordenado
export const OrganizationFormComponent: FC<ComponentProps> = ({
  loading,
  onSubmit,
  buttonText,
  defaultValues,
}) => {
  const {
    handleSubmit,
    control,
    fields,
    append,
    remove,
    apps,
    watch,
    onCheckAllPermissions,
    onCheckAppPermission,
    errors,
  } = useOrganizationForm(defaultValues)

  // TODO: cambiar estructura  de permissions a la usada en el back

  // export class ColaboratorInput {
  //   email: string
  //   permissions: {
  //     app: string
  //     permissions: string[]
  //   }[]
  // }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <FormControllerComponent
          {...{ name: 'name', control, label: 'Nombre' }}
        >
          {({ field: { onBlur, onChange, value } }) => (
            <Input
              {...{
                maxW: '300px',
                onChange,
                onBlur,
                value: value?.toString() || '',
                placeholder: 'Nombre...',
              }}
            />
          )}
        </FormControllerComponent>
      </Box>
      {fields.map((field, index) => (
        <Flex
          key={field.id}
          justify="space-between"
          align="start"
          gap="8px"
          mb="20px"
          pb="20px"
          wrap="wrap"
          borderBottom="1px solid"
          borderBottomColor="gray.300"
        >
          <Box>
            <FormControllerComponent
              {...{
                name: `colaborators.${index}.email`,
                control,
                label: 'Correo del colaborador',
              }}
            >
              {({ field: { onBlur, onChange, value } }) => (
                <Input
                  {...{
                    onChange,
                    onBlur,
                    value: value?.toString() || '',
                    placeholder: 'Correo...',
                  }}
                />
              )}
            </FormControllerComponent>
          </Box>
          <Box
            border={
              errors?.colaborators?.[index]?.permissions ? '1px solid' : ''
            }
            borderColor="red.500"
            borderRadius="4px"
            p="10px"
          >
            {apps.map((app) => (
              <Box key={app.id} mb="10px">
                <Checkbox
                  checked={
                    watch(`colaborators.${index}.permissions`).find(
                      (i) => i.app === app.name
                    )?.permissions.length === app.permissions.length
                  }
                  onCheckedChange={({ checked }) =>
                    onCheckAllPermissions(app, checked === true, index)
                  }
                >
                  Permisos para {APP_NAMES[app.name]}
                </Checkbox>
                <Box padding="4" borderWidth="1px">
                  {app.permissions.map((permission) => (
                    <Checkbox
                      checked={
                        watch(`colaborators.${index}.permissions`)
                          .find((i) => i.app === app.name)
                          ?.permissions?.some((i) => i === permission) || false
                      }
                      onCheckedChange={({ checked }) =>
                        onCheckAppPermission(
                          app,
                          permission,
                          checked === true,
                          index
                        )
                      }
                      key={permission}
                      ml="20px"
                    >
                      {APP_PERMISSIONS[permission]}
                    </Checkbox>
                  ))}
                </Box>
              </Box>
            ))}
            <ErrorMessageComponent
              message={
                errors?.colaborators?.[index]?.permissions?.message ||
                errors?.colaborators?.[index]?.permissions?.[0]?.permissions
                  ?.message
              }
            />
          </Box>

          <Box pt="34px">
            <Button colorPalette="red" onClick={() => remove(index)}>
              Eliminar
            </Button>
          </Box>
        </Flex>
      ))}

      {fields.length < MAX_COLABORATORS_ALLOWED && (
        <Flex mb="10px" justify="center">
          <Button
            colorPalette="cyan"
            onClick={() => append({ email: '', permissions: [] })}
          >
            Agregar Colaborador
          </Button>
        </Flex>
      )}

      <Button type="submit" w="full" loading={loading}>
        {buttonText || 'Crear'}
      </Button>
    </form>
  )
}

import { Box, Flex, Input } from '@chakra-ui/react'
import { FormControllerComponent } from '../FormController'
import { FC } from 'react'
import { ComponentProps } from './types'
import { useOrganizationForm } from '@/hooks'
import {
  APP_NAMES,
  APP_PERMISSIONS,
  MAX_COLLABORATORS_ALLOWED,
} from '@/commons'
import { Checkbox } from '../ui/checkbox'
import { ErrorMessageComponent } from '../ErrorMessage'
import { BoxComponent } from '../Box'
import { ButtonComponent } from '../Button'

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BoxComponent>
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
      </BoxComponent>
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
                name: `collaborators.${index}.email`,
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
              errors?.collaborators?.[index]?.permissions ? '1px solid' : ''
            }
            borderColor="red.500"
            borderRadius="4px"
            p="10px"
          >
            {apps.map((app) => (
              <Box key={app.id} mb="10px">
                <Checkbox
                  checked={
                    watch(`collaborators.${index}.permissions`).find(
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
                        watch(`collaborators.${index}.permissions`)
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
                errors?.collaborators?.[index]?.permissions?.message ||
                errors?.collaborators?.[index]?.permissions?.[0]?.permissions
                  ?.message
              }
            />
          </Box>

          <BoxComponent padding="34px 0 0 0">
            <ButtonComponent variant="danger" onClick={() => remove(index)}>
              Eliminar
            </ButtonComponent>
          </BoxComponent>
        </Flex>
      ))}

      {fields.length < MAX_COLLABORATORS_ALLOWED && (
        <Flex mb="10px" justify="center">
          <ButtonComponent
            onClick={() => append({ email: '', permissions: [] })}
          >
            Agregar Colaborador
          </ButtonComponent>
        </Flex>
      )}

      <ButtonComponent type="submit" variant="success" loading={loading}>
        {buttonText || 'Crear'}
      </ButtonComponent>
    </form>
  )
}

import {
  Box,
  createListCollection,
  Flex,
  Input,
  ListCollection,
} from '@chakra-ui/react'
import { FormControllerCompnent } from '../FormController'
import { Button } from '../ui/button'
import { FC } from 'react'
import { ComponentProps } from './types'
import { useOrganizationForm } from '@/hooks'
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '../ui/select'
import { PERMISSIONS_LIST } from '@/commons'

const permissionKeys = Object.keys(PERMISSIONS_LIST)

const labels: Record<string, string> = {
  ORGANIZATION: 'Organización',
  WAITINGLINE: 'Atención clientes',
}

const apps = createListCollection({
  items: permissionKeys.map((key) => ({
    label: labels[key],
    value: key,
  })),
})

const orgPermissions = createListCollection({
  items: PERMISSIONS_LIST.ORGANIZATION.map((permission) => ({
    label: permission,
    value: permission,
  })),
})

const waitingPermissions = createListCollection({
  items: PERMISSIONS_LIST.WAITINGLINE.map((permission) => ({
    label: permission,
    value: permission,
  })),
})

const permissionItems: Record<string, ListCollection> = {
  ORGANIZATION: orgPermissions,
  WAITINGLINE: waitingPermissions,
}

const voidItems = createListCollection({
  items: [],
})
// TODO: refactorizar para que quede ordenado
export const OrganizationFormComponent: FC<ComponentProps> = ({
  loading,
  onSubmit,
  buttonText,
  defaultValues,
}) => {
  const { handleSubmit, control, watch, fields, append, remove, setValue } =
    useOrganizationForm(defaultValues)

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
        <FormControllerCompnent {...{ name: 'name', control, label: 'Nombre' }}>
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
        </FormControllerCompnent>
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
            <FormControllerCompnent
              {...{
                name: `colaborators.${index}.email`,
                control,
                label: 'Correo',
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
            </FormControllerCompnent>
          </Box>
          <Box>
            <FormControllerCompnent
              {...{
                name: `colaborators.${index}.app`,
                control,
                label: 'Aplicación',
              }}
            >
              {({ field: { name, onBlur, onChange, value } }) => (
                <SelectRoot
                  collection={apps}
                  width="320px"
                  name={name}
                  value={value ? [value.toString()] : undefined}
                  onValueChange={({ value }) => {
                    setValue(`colaborators.${index}.permissions`, [])
                    onChange(value?.[0])
                  }}
                  onInteractOutside={() => onBlur()}
                >
                  <SelectTrigger>
                    <SelectValueText placeholder="Seleciona la aplicación" />
                  </SelectTrigger>
                  <SelectContent>
                    {apps.items.map((app) => (
                      <SelectItem item={app} key={app.value}>
                        {app.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectRoot>
              )}
            </FormControllerCompnent>
          </Box>
          <Box>
            <FormControllerCompnent
              {...{
                name: `colaborators.${index}.permissions`,
                control,
                label: 'Permisos',
              }}
            >
              {({ field: { name, onBlur, onChange, value } }) => {
                const app = watch(`colaborators.${index}.app`)
                const selectOptions = permissionItems[app] || voidItems

                return (
                  <SelectRoot
                    multiple
                    collection={selectOptions}
                    width="320px"
                    name={name}
                    value={value ? (value as string[]) : undefined}
                    onValueChange={({ value }) => {
                      console.log(typeof value)
                      onChange(value)
                    }}
                    onInteractOutside={() => onBlur()}
                  >
                    <SelectTrigger>
                      <SelectValueText placeholder="Seleciona los permisos" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectOptions.items.map((app) => (
                        <SelectItem item={app} key={app.value}>
                          {app.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </SelectRoot>
                )
              }}
            </FormControllerCompnent>
          </Box>
          <Box pt="34px">
            <Button colorPalette="red" onClick={() => remove(index)}>
              Eliminar
            </Button>
          </Box>
        </Flex>
      ))}

      <Flex mb="10px" justify="center">
        <Button
          colorPalette="cyan"
          onClick={() => append({ email: '', app: '', permissions: [] })}
        >
          Agregar Colaborador
        </Button>
      </Flex>

      <Button type="submit" w="full" loading={loading}>
        {buttonText || 'Crear'}
      </Button>
    </form>
  )
}

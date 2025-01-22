import { AppModel, PermissionsInput, UpdateOrganizationInput } from '@/commons'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, useFieldArray } from 'react-hook-form'
import { schema } from './schema'
import { useSession } from '@/hooks'

export const useOrganizationForm = (
  defaultValues?: UpdateOrganizationInput
) => {
  const { user } = useSession()

  const apps = user?.apps || []

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm<UpdateOrganizationInput>({
    mode: 'all',
    defaultValues,
    resolver: zodResolver(schema),
  })

  const { append, remove, fields } = useFieldArray({
    control,
    name: 'collaborators',
  })

  const onCheckAllPermissions = (
    app: AppModel,
    checked: boolean,
    index: number
  ) => {
    const oldPermissions = [...watch(`collaborators.${index}.permissions`)]

    let newPermissions = []

    if (checked)
      newPermissions = [
        ...oldPermissions?.filter((i) => i.app !== app.name),
        { app: app.name, permissions: app.permissions },
      ]
    else newPermissions = oldPermissions.filter((item) => item.app !== app.name)

    setValue(`collaborators.${index}.permissions`, newPermissions, {
      shouldValidate: true,
    })
  }

  const onCheckAppPermission = (
    app: AppModel,
    permission: string,
    checked: boolean,
    index: number
  ) => {
    const oldPermissions = [...watch(`collaborators.${index}.permissions`)]
    const permissionIndex = oldPermissions.findIndex((i) => i.app === app.name)

    let newPermissions: PermissionsInput[] = []

    if (checked) {
      if (permissionIndex < 0) {
        newPermissions = [
          ...oldPermissions,
          { app: app.name, permissions: [permission] },
        ]
      } else {
        oldPermissions[permissionIndex].permissions = [
          ...oldPermissions[permissionIndex].permissions,
          permission,
        ]
        newPermissions = [...oldPermissions]
      }
    } else {
      if (permissionIndex >= 0) {
        oldPermissions[permissionIndex].permissions = [
          ...oldPermissions[permissionIndex].permissions.filter(
            (i) => i !== permission
          ),
        ]
        newPermissions = [
          ...oldPermissions.filter((i) => i.permissions.length > 0),
        ]
      }
    }

    setValue(`collaborators.${index}.permissions`, newPermissions, {
      shouldValidate: true,
    })
  }

  return {
    handleSubmit,
    control,
    append,
    remove,
    fields,
    setValue,
    watch,
    apps,
    errors,
    onCheckAllPermissions,
    onCheckAppPermission,
  }
}

'use client'

import {
  ConfirmationDialogComponent,
  ModuleFormModalComponent,
  TitleComponent,
  ModulesListComponent,
  NeedOrganizationComponent,
  ProtectedRouteComponent,
} from '@/components'
import { useModulesPage } from '@/hooks'

import { Box, Text } from '@chakra-ui/react'

const ModulesPage = () => {
  const {
    openNew,
    onOpenNew,
    onCloseNew,
    organization,
    modules,
    loading,
    create: { onCreate, creating },
    update: { onEdit, onCloseEdit, onUpdate, updating, forUpdate },
    delete: { confirmOpen, onCloseConfirm, onDelete, onDeleteModule, deleting },
  } = useModulesPage()

  return (
    <ProtectedRouteComponent>
      <NeedOrganizationComponent>
        <Box mb={14} mt={['200px', 'unset']}>
          <TitleComponent>
            Módulos de la organización {organization?.name || ''}
          </TitleComponent>
        </Box>
        <ModulesListComponent
          {...{ loading, onDelete, onEdit, onOpenNew, modules }}
        />
        <ModuleFormModalComponent
          {...{
            open: openNew,
            onClose: onCloseNew,
            onSubmit: (val) => onCreate(val),
            saving: creating,
          }}
        />
        {forUpdate && (
          <ModuleFormModalComponent
            {...{
              title: `Modificar módulo ${forUpdate?.name}`,
              open: !!forUpdate,
              onClose: onCloseEdit,
              onSubmit: (val) => onUpdate(val),
              saving: updating,
              defaultValues: forUpdate,
            }}
          />
        )}
        <ConfirmationDialogComponent
          open={confirmOpen}
          onCancel={onCloseConfirm}
          onConfirm={onDeleteModule}
          loading={deleting}
        >
          <Text>
            ¿Estas seguro que deseas eliminar este modulo? esta acción no se
            puede revertir.
          </Text>
        </ConfirmationDialogComponent>
      </NeedOrganizationComponent>
    </ProtectedRouteComponent>
  )
}

export default ModulesPage

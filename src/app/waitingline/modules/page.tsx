'use client'

import {
  ConfirmationDialogComponent,
  ModuleFormModalComponent,
  TitleComponent,
  ModulesListComponent,
} from '@/components'
import { useModulesPage } from '@/hooks'
import { FC } from 'react'
import { PageProps } from './types'
import { Box, Text } from '@chakra-ui/react'
import { ProtectedRouteComponent } from '@/components/ProtectedRoute'

const ModulesPage: FC<PageProps> = (props) => {
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
  } = useModulesPage(props)

  return (
    <ProtectedRouteComponent>
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
      <ConfirmationDialogComponent
        open={confirmOpen}
        onClose={onCloseConfirm}
        onCancel={onCloseConfirm}
        onConfirm={onDeleteModule}
        loading={deleting}
      >
        <Text>
          ¿Estas seguro que deseas eliminar este modulo? esta acción no se puede
          revertir.
        </Text>
      </ConfirmationDialogComponent>
    </ProtectedRouteComponent>
  )
}

export default ModulesPage

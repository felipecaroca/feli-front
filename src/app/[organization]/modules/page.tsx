'use client'

import {
  AddNewButtonComponent,
  FullScreenCenterComponent,
  ModuleCardComponent,
  ConfirmationDialogComponent,
  ModuleFormModalComponent,
  TitleComponent,
} from '@/components'
import { useModulesPage } from '@/hooks'
import { FC } from 'react'
import { PageProps } from './types'
import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { MAX_MODULES_ALLOWED } from '@/commons'

const ModulesPage: FC<PageProps> = (props) => {
  const {
    openNew,
    onOpenNew,
    onCloseNew,
    organization,
    modules,
    loading,
    create: { onCreate, creating },
    delete: { confirmOpen, onCloseConfirm, onDelete, onDeleteModule, deleting },
  } = useModulesPage(props)

  return (
    <FullScreenCenterComponent>
      <Box mb={14}>
        <TitleComponent>
          Módulos de la organización {organization || ''}
        </TitleComponent>
      </Box>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(5, 1fr)',
        ]}
        gap={4}
      >
        {loading ? (
          <SkeletonSquare w={200} h={200} />
        ) : (
          modules.map((module) => (
            <GridItem key={module.id}>
              <ModuleCardComponent
                {...{ module, onDelete, onEdit: () => console.log() }}
              />
            </GridItem>
          ))
        )}
        {!loading && modules.length < MAX_MODULES_ALLOWED && (
          <AddNewButtonComponent w={200} h={200} onClick={onOpenNew} />
        )}
      </Grid>
      <ModuleFormModalComponent
        {...{
          open: openNew,
          onClose: onCloseNew,
          onSubmit: (val) => onCreate(val),
          saving: creating,
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
    </FullScreenCenterComponent>
  )
}

export default ModulesPage

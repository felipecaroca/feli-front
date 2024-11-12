'use client'

import {
  AddNewButtonComponent,
  FullScreenCenterComponent,
  ModuleCardComponent,
  ConfirmationDialogComponent,
} from '@/components'
import { useModulesPage } from '@/hooks'
import { FC } from 'react'
import { PageProps } from './types'
import { Grid, GridItem, Text } from '@chakra-ui/react'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { MAX_MODULES_ALLOWED } from '@/commons'

const ModulesPage: FC<PageProps> = (props) => {
  const {
    modules,
    loading,
    delete: { confirmOpen, onCloseConfirm, onDelete, deleteModule, deleting },
  } = useModulesPage(props)

  return (
    <FullScreenCenterComponent>
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
          <AddNewButtonComponent />
        )}
      </Grid>
      <ConfirmationDialogComponent
        open={confirmOpen}
        onOpenChange={(details) => {
          if (!details.open) onCloseConfirm()
        }}
        onCancel={onCloseConfirm}
        onConfirm={deleteModule}
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

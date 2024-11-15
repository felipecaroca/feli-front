'use client'

import {
  AddNewButtonComponent,
  FullScreenCenterComponent,
  ModuleCardComponent,
  ConfirmationDialogComponent,
  ModalComponent,
  ModuleFormComponent,
} from '@/components'
import { useModulesPage } from '@/hooks'
import { FC } from 'react'
import { PageProps } from './types'
import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { SkeletonSquare } from '@/components/ui/skeleton'
import { MAX_MODULES_ALLOWED } from '@/commons'

const ModulesPage: FC<PageProps> = (props) => {
  const {
    openNew,
    onOpenNew,
    onCloseNew,
    modules,
    loading,
    delete: { confirmOpen, onCloseConfirm, onDelete, deleteModule, deleting },
  } = useModulesPage(props)

  // TODO: trabajar estilos para titulos

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
          <AddNewButtonComponent w={200} h={200} onClick={onOpenNew} />
        )}
      </Grid>
      <ModalComponent {...{ open: openNew, onClose: onCloseNew }}>
        <Text>Agregar nuevo módulo</Text>
        <Flex justify="center" alignItems="center">
          <Box w={['full', 'full', '80%', '60%', '40%']}>
            <ModuleFormComponent onSubmit={(val) => console.log(val)} />
          </Box>
        </Flex>
      </ModalComponent>
      <ConfirmationDialogComponent
        open={confirmOpen}
        onClose={onCloseConfirm}
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

import { Grid, GridItem } from '@chakra-ui/react'
import { SkeletonSquare } from '../ui/skeleton'
import { ModuleCardComponent } from '../ModuleCard'
import { AddNewButtonComponent } from '../AddNewButton'
import { FC } from 'react'
import { ComponentProps } from './types'
import { MAX_MODULES_ALLOWED } from '@/commons'

export const ModulesListComponent: FC<ComponentProps> = ({
  loading,
  modules,
  onOpenNew,
  ...clickOrModify
}) => {
  return (
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
            <ModuleCardComponent {...{ module, ...clickOrModify }} />
          </GridItem>
        ))
      )}
      {onOpenNew && !loading && modules.length < MAX_MODULES_ALLOWED && (
        <AddNewButtonComponent w={200} h={200} onClick={onOpenNew} />
      )}
    </Grid>
  )
}

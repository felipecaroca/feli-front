import { Flex } from '@chakra-ui/react'
import { ModuleCardComponent } from '../ModuleCard'
import { AddNewButtonComponent } from '../AddNewButton'
import { FC } from 'react'
import { ComponentProps } from './types'
import { MAX_MODULES_ALLOWED } from '@/commons'
import { SkeletonComponent } from '../Skeleton'

export const ModulesListComponent: FC<ComponentProps> = ({
  loading,
  modules,
  onOpenNew,
  ...clickOrModify
}) => {
  return (
    <Flex gap={4} justify="center" align="center" wrap="wrap">
      {loading ? (
        <SkeletonComponent width="200px" height="200px" />
      ) : (
        modules.map((module) => (
          <ModuleCardComponent
            w="200px"
            h="200px"
            key={module.id}
            {...{ module, ...clickOrModify }}
          />
        ))
      )}
      {onOpenNew && !loading && modules.length < MAX_MODULES_ALLOWED && (
        <AddNewButtonComponent
          width="200px"
          height="200px"
          onClick={onOpenNew}
        />
      )}
    </Flex>
  )
}

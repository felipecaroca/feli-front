import { Flex } from '@chakra-ui/react'
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
    <Flex gap={4} justify="center" align="center" wrap="wrap">
      {loading ? (
        <SkeletonSquare w={200} h={200} />
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
        <AddNewButtonComponent w={200} h={200} onClick={onOpenNew} />
      )}
    </Flex>
  )
}

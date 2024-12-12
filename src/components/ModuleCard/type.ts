import { ModuleModel } from '@/commons'
import { ClickOrModify } from '@/commons/types/components/card'
import { CardRootProps } from '@chakra-ui/react'


export type ComponentProps = {
  module: ModuleModel
} & ClickOrModify & CardRootProps
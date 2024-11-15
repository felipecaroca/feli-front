import { ModalType } from '@/commons/types/components'
import {DialogRootProps} from '@chakra-ui/react'
import { ReactElement } from 'react'

export type  ComponentProps = {
  header?: ReactElement | ReactElement[] | string
  footer?: ReactElement | ReactElement[] | string
} & DialogRootProps & ModalType
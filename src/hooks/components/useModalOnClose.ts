import { DialogOpenChangeDetails } from '@chakra-ui/react'

export const useModalClose = (onClose:()=>void) => {

  const onOpenChange = (details: DialogOpenChangeDetails) => {
    if (!details.open) onClose()
  }

  return {
    onOpenChange,
  }
}
import { useState } from 'react'

export const useDisclosure = (defaultValue = false) => {
  const [open, setOpen] = useState<boolean>(defaultValue)

  return {
    open,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    onToggle: () => setOpen((prev) => !prev),
  }
}

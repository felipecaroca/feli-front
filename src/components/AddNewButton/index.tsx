import { Text, VStack } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { Button } from '../ui/button'
export const AddNewButtonComponent = () => {
  return (
    <Button variant="outline" h="full" borderWidth={2} borderStyle="dashed">
      <VStack justifyContent="center" alignItems="center" gap={2}>
        <Text>Agregar nuevo</Text>
        <FaPlus />
      </VStack>
    </Button>
  )
}

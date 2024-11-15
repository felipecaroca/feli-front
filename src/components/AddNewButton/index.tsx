import { ButtonProps, Text, VStack } from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { Button } from '../ui/button'
import { FC } from 'react'
export const AddNewButtonComponent: FC<ButtonProps> = (props) => {
  return (
    <Button
      variant="outline"
      h="full"
      borderWidth={2}
      borderStyle="dashed"
      {...props}
    >
      <VStack justifyContent="center" alignItems="center" gap={2}>
        <Text>Agregar nuevo</Text>
        <FaPlus />
      </VStack>
    </Button>
  )
}

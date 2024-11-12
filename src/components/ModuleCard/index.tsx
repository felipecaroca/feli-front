import { Card, IconButton } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './type'
import { MdDelete, MdEdit } from 'react-icons/md'

export const ModuleCardComponent: FC<ComponentProps> = ({
  module,
  onDelete,
  onEdit,
}) => {
  return (
    <Card.Root
      variant="elevated"
      maxW={200}
      h="full"
      flexWrap="wrap"
      cursor="pointer"
    >
      <Card.Body>
        <Card.Title>{module.name}</Card.Title>
        <Card.Description>{module.description}</Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="end">
        <IconButton
          size="sm"
          colorPalette="blue"
          variant="outline"
          onClick={() => onEdit(module)}
        >
          <MdEdit />
        </IconButton>
        <IconButton
          size="sm"
          colorPalette="red"
          variant="outline"
          onClick={() => onDelete(module)}
        >
          <MdDelete />
        </IconButton>
      </Card.Footer>
    </Card.Root>
  )
}

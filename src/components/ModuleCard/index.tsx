import { Card, IconButton } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './type'
import { MdDelete, MdEdit } from 'react-icons/md'

export const ModuleCardComponent: FC<ComponentProps> = ({
  module,
  onDelete,
  onEdit,
  onCardClick,
  ...cardRootProps
}) => {
  return (
    <Card.Root
      variant="elevated"
      maxW={200}
      h="full"
      flexWrap="wrap"
      cursor="pointer"
      {...cardRootProps}
      onClick={() => onCardClick && onCardClick(module)}
    >
      <Card.Body>
        <Card.Title>{module.name}</Card.Title>
        <Card.Description overflowY="auto">
          {module.description}
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="end">
        {onEdit && (
          <IconButton
            size="sm"
            colorPalette="blue"
            variant="outline"
            onClick={() => onEdit(module)}
          >
            <MdEdit />
          </IconButton>
        )}
        {onDelete && (
          <IconButton
            size="sm"
            colorPalette="red"
            variant="outline"
            onClick={() => onDelete(module)}
          >
            <MdDelete />
          </IconButton>
        )}
      </Card.Footer>
    </Card.Root>
  )
}

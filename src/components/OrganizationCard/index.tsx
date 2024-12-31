import { Card, IconButton } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './type'
import { MdDelete } from 'react-icons/md'

export const OrganizationCardComponent: FC<ComponentProps> = ({
  organization,
  onCardClick,
  onDelete,
  ...cardProps
}) => {
  return (
    <Card.Root
      variant="elevated"
      maxW={200}
      flexWrap="wrap"
      cursor="pointer"
      {...cardProps}
      onClick={() => onCardClick(organization)}
    >
      <Card.Body>
        <Card.Title>{organization.name}</Card.Title>
      </Card.Body>
      {onDelete && (
        <Card.Footer justifyContent="end">
          <IconButton
            size="sm"
            colorPalette="red"
            variant="outline"
            onClick={onDelete}
          >
            <MdDelete />
          </IconButton>
        </Card.Footer>
      )}
    </Card.Root>
  )
}

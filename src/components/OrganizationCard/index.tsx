import { Box, Card, IconButton } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './type'
import { MdDelete, MdEdit } from 'react-icons/md'

export const OrganizationCardComponent: FC<ComponentProps> = ({
  organization,
  onCardClick,
  onDelete,
  onEdit,
  isCurrent,
  ...cardProps
}) => {
  return (
    <Card.Root
      variant="elevated"
      maxW={200}
      flexWrap="wrap"
      cursor={onCardClick ? 'pointer' : 'default'}
      {...cardProps}
      onClick={() => onCardClick && onCardClick(organization)}
    >
      <Card.Body>
        {isCurrent && (
          <Box
            color="white"
            bg="blue.400"
            textAlign="center"
            position="relative"
            w="90px"
            top="-20px"
            left="75%"
            transform="rotate(45deg)"
            clipPath="polygon(25% 0, 75% 0, 100% 100%, 0 100%)"
          >
            Actual
          </Box>
        )}
        <Card.Title>{organization.name}</Card.Title>
      </Card.Body>
      {(onDelete || onEdit) && (
        <Card.Footer justifyContent="end">
          {onEdit && (
            <IconButton
              size="sm"
              colorPalette="blue"
              variant="outline"
              onClick={onEdit}
            >
              <MdEdit />
            </IconButton>
          )}
          {onDelete && (
            <IconButton
              size="sm"
              colorPalette="red"
              variant="outline"
              onClick={onDelete}
            >
              <MdDelete />
            </IconButton>
          )}
        </Card.Footer>
      )}
    </Card.Root>
  )
}

import { Card } from '@chakra-ui/react'
import { FC } from 'react'
import { ComponentProps } from './type'

export const OrganizationCardComponent: FC<ComponentProps> = ({
  organization,
  onClick,
}) => {
  return (
    <Card.Root
      variant="elevated"
      maxW={200}
      flexWrap="wrap"
      cursor="pointer"
      onClick={() => onClick(organization)}
    >
      <Card.Body>
        <Card.Title>{organization.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  )
}

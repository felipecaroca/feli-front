import { FC } from 'react'
import { ComponentProps } from './type'
import { MdDelete, MdEdit } from 'react-icons/md'
import CardMarkComponent from '../CardMark'
import { ButtonComponent } from '../Button'
import { BoxComponent } from '../Box'
import { CardComponent } from '../Card'
import { TitleComponent } from '../Title'
import { FlexComponent } from '../Flex'
import { FooterComponent } from '../Footer'

export const OrganizationCardComponent: FC<ComponentProps> = ({
  organization,
  onCardClick,
  onDelete,
  onEdit,
  isCurrent,
}) => {
  return (
    <>
      <CardComponent
        width="200px"
        height="200px"
        onCardClick={onCardClick ? () => onCardClick(organization) : undefined}
      >
        {isCurrent && (
          <CardMarkComponent
            width="90px"
            height="26px"
            left="70%"
            variant="warning"
            top="0px"
            text="Actual"
          />
        )}
        <BoxComponent padding="20px" height="100%">
          <TitleComponent textAlign="start">{organization.name}</TitleComponent>
          <FooterComponent bottom={isCurrent ? '60px' : '34px'}>
            {(onDelete || onEdit) && (
              <FlexComponent justify="end">
                {onEdit && (
                  <BoxComponent>
                    <ButtonComponent onClick={onEdit}>
                      <MdEdit />
                    </ButtonComponent>
                  </BoxComponent>
                )}
                {onDelete && (
                  <BoxComponent>
                    <ButtonComponent variant="danger" onClick={onDelete}>
                      <MdDelete />
                    </ButtonComponent>
                  </BoxComponent>
                )}
              </FlexComponent>
            )}
          </FooterComponent>
        </BoxComponent>
      </CardComponent>
    </>
  )
}

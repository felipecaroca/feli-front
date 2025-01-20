import { FC } from 'react'
import { ComponentProps } from './types'
import { Box, Input, Flex } from '@chakra-ui/react'
import { useAttentionForm } from '@/hooks'
import { Button } from '../ui/button'
import { FormControllerComponent } from '../FormController'

export const AttentionFormComponent: FC<ComponentProps> = ({
  onSubmit,
  loading,
  defaultValues,
}) => {
  const { control, handleSubmit } = useAttentionForm(defaultValues)

  return (
    <Box w="full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControllerComponent
          {...{ name: 'name', control, label: 'Nombre' }}
        >
          {({ field: { onBlur, onChange, value } }) => (
            <Input
              {...{
                onChange,
                onBlur,
                value: value || '',
                placeholder: 'Nombre...',
              }}
            />
          )}
        </FormControllerComponent>

        <Flex justify="end" py={2}>
          <Button type="submit" {...{ loading }}>
            Tomar Número de atención
          </Button>
        </Flex>
      </form>
    </Box>
  )
}

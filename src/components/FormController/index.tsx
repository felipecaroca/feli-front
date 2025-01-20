import { Controller, FieldValues } from 'react-hook-form'
import { ComponentProps } from './types'
import { Field } from '../ui/field'

export const FormControllerComponent = <T extends FieldValues>({
  name,
  control,
  label,
  children,
}: ComponentProps<T>) => {
  return (
    <Controller
      {...{ name, control }}
      render={(props) => (
        <Field
          py={2}
          {...{ label }}
          invalid={!!props.fieldState.error?.message}
          errorText={props.fieldState.error?.message}
        >
          {children(props)}
        </Field>
      )}
    />
  )
}

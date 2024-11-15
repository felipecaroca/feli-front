import { ControllerFieldState, ControllerRenderProps, FieldPath, FieldValues, UseFormStateReturn } from 'react-hook-form'

export type ControllerRenderType<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
}
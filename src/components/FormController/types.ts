
import { ControllerRenderType } from '@/commons'
import { Control, FieldPath, FieldValues } from 'react-hook-form'

export type ComponentProps<T extends FieldValues = FieldValues> = {
  name: FieldPath<T>
  control: Control<T>
  label?:string
  children: (props: ControllerRenderType<T>) => React.ReactNode;
} 
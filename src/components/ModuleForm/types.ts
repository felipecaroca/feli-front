import { SaveModInput } from '@/commons'


export type ComponentProps = {
  onSubmit(values: SaveModInput):void
  loading?:boolean
  defaultValues?: SaveModInput
}
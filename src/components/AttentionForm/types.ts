import { CreateAttentionInput } from '@/commons'


export type ComponentProps = {
  onSubmit(values: CreateAttentionInput):void
  loading?:boolean
  defaultValues?: CreateAttentionInput
}
import { z } from 'zod'

export const schema = z.object({
  organization: z.string({required_error: 'Debes selecionar una organización', invalid_type_error: 'La selección no es valida'})
})

export type SchemaType = z.infer<typeof schema>
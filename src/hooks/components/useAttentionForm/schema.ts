import { z } from 'zod'

export const schema = z.object({
  name: z.string({invalid_type_error: '* El valor no es válido'})
              .optional()
})
import { z } from 'zod'

export const schema = z.object({
  name: z.string({required_error: '* El nombre es requerido', invalid_type_error: '* El valor no es válido'})
              .min(5, '* Debe tener al menos 5 caracteres'),
  prefix: z.string({required_error: '* El prefijo es requerido', invalid_type_error: '* El valor no es válido'})
              .min(2, '* Deben ser al menos 2 caracteres')
              .max(6, '* Deben ser máximo 6 caracteres'),
  description: z.string().optional()
})
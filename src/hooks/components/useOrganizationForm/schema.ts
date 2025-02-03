import { z } from 'zod'

export const schema = z.object({
  name: z
    .string({
      required_error: '*El nombre es requerido',
      invalid_type_error: '*El valor no es válido',
    })
    .min(1, '*El nombre es requerido'),
  collaborators: z.array(
    z.object({
      email: z.string().min(1, '*El correo es requerido')
        .email('*El correo no es valido')
        .refine(value => value.endsWith('@gmail.com'), '*Solo se pueden agregar correos @gmail.com'),
      permissions: z.array(z.object({
        app: z.string(),
        permissions: z.string().array(),
      })).min(1, '*Selecciona al menos 1 permiso para el colaborador')
    })
  )
})
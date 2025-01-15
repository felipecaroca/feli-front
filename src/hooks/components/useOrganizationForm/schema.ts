import { z } from "zod";

export const schema = z.object({
  name: z
    .string({
      required_error: '*El nombre es requerido',
      invalid_type_error: '*El valor no es válido',
    })
    .min(1, '*El nombre es requerido'),
  colaborators: z.array(
    z.object({
      email: z.string().min(1, '*El correo es requerido')
        .email('*El correo no es valido')
        .refine(value => value.endsWith('@gmail.com'), '*Solo se pueden agregar correos @gmail.com'),
      app: z.string().min(1, '*Debes seleccionar una aplicación'),
      permissions: z.string().array().min(1, '*Debes seleccionar al menos 1 permiso'),
    })
  )
  .superRefine((data, ctx) => {
    data.forEach((item, index) => {
      if(!item.email) return

      const resp = data.filter(a => a.email === item.email && a.app === item.app)

      if(resp.length >1)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: `*Ya se encuentra esta aplicación para el correo ${item.email}`,
          path: [`[${index}].app`]
        })
    })
  })
})
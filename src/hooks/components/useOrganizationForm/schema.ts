import { z } from "zod";

export const schema = z.object({
  name: z
    .string({
      required_error: '*El nombre es requerido',
      invalid_type_error: '*El valor no es válido',
    })
    .min(1, '*El nombre es requerido'),
  userEmails: z.string().array().optional()
})
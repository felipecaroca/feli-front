import { z } from 'zod'
import { schema } from './schema'

export type ModuleFormType = z.infer<typeof schema>
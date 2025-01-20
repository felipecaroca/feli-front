import { BaseModel } from "./base";

export type AppModel = {
  name: string
  permissions: string[]
} & BaseModel
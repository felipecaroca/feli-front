export type PermissionsInput = {
  app: string, 
  permissions: string[]
}

export type ColaboratorInput = {
  email: string
  permissions: PermissionsInput[]
}
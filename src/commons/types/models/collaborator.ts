export type PermissionsInput = {
  app: string, 
  permissions: string[]
}

export type CollaboratorInput = {
  email: string
  permissions: PermissionsInput[]
}
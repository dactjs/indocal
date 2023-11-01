export type AppAbilityAction =
  (typeof AppAbilityAction)[keyof typeof AppAbilityAction];

export const AppAbilityAction = {
  CREATE: "create",
  READ: "read",
  UPDATE: "update",
  DELETE: "delete",
} as const;

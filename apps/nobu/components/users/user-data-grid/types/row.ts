import type { User } from "@indocal/schemas";

export type UserDataGridRow = Pick<
  User,
  "id" | "username" | "email" | "name" | "status"
>;

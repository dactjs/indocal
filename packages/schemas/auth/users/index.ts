import { z as zod } from "zod";

import {
  USERNAME_PATTERN,
  PASSWORD_PATTERN,
  USER_STATUS_TUPLE,
  USER_ROLE_TUPLE,
} from "../../constants";

///////////
// Types //
///////////

export type User = zod.infer<typeof UserSchema>;

export type CreateUserData = zod.infer<typeof CreateUserSchema>;

export type UpdateUserData = zod.infer<typeof UpdateUserSchema>;

export type FindUniqueUserQuery = zod.infer<typeof FindUniqueUserSchema>;

export type AddUserGroupsToUserData = zod.infer<
  typeof AddUserGroupsToUserSchema
>;

export type SetUserGroupsToUserData = zod.infer<
  typeof SetUserGroupsToUserSchema
>;

export type RemoveUserGroupsToUserData = zod.infer<
  typeof RemoveUserGroupsToUserSchema
>;

/////////////
// Schemas //
/////////////

export const UserSchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
  status: zod.enum(USER_STATUS_TUPLE),
  roles: zod.enum(USER_ROLE_TUPLE).array(),
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("User").default("User"), // CASL Subject Type
});

export const CreateUserSchema = zod.object({
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
  password: zod.string().min(6).regex(PASSWORD_PATTERN),
  roles: zod.enum(USER_ROLE_TUPLE).array(),
});

export const UpdateUserSchema = zod
  .object({
    username: zod.string().min(1).regex(USERNAME_PATTERN),
    email: zod.string().email(),
    name: zod.string().min(1),
    status: zod.enum(USER_STATUS_TUPLE),
    roles: zod.enum(USER_ROLE_TUPLE).array(),
  })
  .partial();

export const FindUniqueUserSchema = zod
  .object({
    id: zod.string().uuid(),
    username: zod.string().min(1).regex(USERNAME_PATTERN),
    email: zod.string().email(),
  })
  .partial();

export const AddUserGroupsToUserSchema = zod.object({
  groups: zod.string().uuid().array(),
});

export const SetUserGroupsToUserSchema = zod.object({
  groups: zod.string().uuid().array(),
});

export const RemoveUserGroupsToUserSchema = zod.object({
  groups: zod.string().uuid().array(),
});

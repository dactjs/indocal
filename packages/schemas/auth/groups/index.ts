import { z as zod } from "zod";

import {
  USERNAME_PATTERN,
  USER_STATUS_TUPLE,
  USER_ROLE_TUPLE,
} from "../../constants";

///////////
// Types //
///////////

export type UserGroup = zod.infer<typeof UserGroupSchema>;

export type CreateUserGroupData = zod.infer<typeof CreateUserGroupSchema>;

export type UpdateUserGroupData = zod.infer<typeof UpdateUserGroupSchema>;

export type FindOneUserGroupQuery = zod.infer<typeof FindOneUserGroupSchema>;

/////////////
// Schemas //
/////////////

const MemberSchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
  status: zod.enum(USER_STATUS_TUPLE),
  roles: zod.enum(USER_ROLE_TUPLE).array(),
});

export const UserGroupSchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
  description: zod.string().min(1).nullable(),
  members: MemberSchema.array(),
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
});

export const CreateUserGroupSchema = zod.object({
  name: zod.string().min(1),
  description: zod.string().min(1).nullable(),
  members: zod.string().uuid().array(),
});

export const UpdateUserGroupSchema = zod
  .object({
    name: zod.string().min(1),
    description: zod.string().min(1).nullable(),
    members: zod.string().uuid().array(),
  })
  .partial();

export const FindOneUserGroupSchema = zod
  .object({
    id: zod.string().uuid(),
    name: zod.string().min(1),
    description: zod.string().min(1),
  })
  .partial();

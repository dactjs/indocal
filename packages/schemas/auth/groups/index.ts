import { z as zod } from "zod";

///////////
// Types //
///////////

export type UserGroup = zod.infer<typeof UserGroupSchema>;

export type CreateUserGroupData = zod.infer<typeof CreateUserGroupSchema>;

export type UpdateUserGroupData = zod.infer<typeof UpdateUserGroupSchema>;

export type FindUniqueUserGroupQuery = zod.infer<
  typeof FindUniqueUserGroupSchema
>;

export type AddMembersToUserGroupData = zod.infer<
  typeof AddMembersToUserGroupSchema
>;

export type SetMembersToUserGroupData = zod.infer<
  typeof SetMembersToUserGroupSchema
>;

export type RemoveMembersToUserGroupData = zod.infer<
  typeof RemoveMembersToUserGroupSchema
>;

/////////////
// Schemas //
/////////////

export const UserGroupSchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
  description: zod.string().min(1).nullable(),
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("UserGroup").default("UserGroup"), // CASL Subject Type
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
  })
  .partial();

export const FindUniqueUserGroupSchema = zod
  .object({
    id: zod.string().uuid(),
    name: zod.string().min(1),
  })
  .partial();

export const AddMembersToUserGroupSchema = zod.object({
  members: zod.string().uuid().array(),
});

export const SetMembersToUserGroupSchema = zod.object({
  members: zod.string().uuid().array(),
});

export const RemoveMembersToUserGroupSchema = zod.object({
  members: zod.string().uuid().array(),
});

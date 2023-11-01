import { z as zod } from "zod";

import { USERNAME_PATTERN } from "../../constants";

///////////
// Types //
///////////

export type SupplyComment = zod.infer<typeof SupplyCommentSchema>;

export type CreateSupplyCommentData = zod.infer<
  typeof CreateSupplyCommentSchema
>;

export type UpdateSupplyCommentData = zod.infer<
  typeof UpdateSupplyCommentSchema
>;

export type FindUniqueSupplyCommentQuery = zod.infer<
  typeof FindUniqueSupplyCommentSchema
>;

/////////////
// Schemas //
/////////////

const SupplySchema = zod.object({
  id: zod.string().uuid(),
  brand: zod.string().min(1),
  model: zod.string().min(1),
  serial: zod.string().min(1),
});

const WrittenBySchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
});

export const SupplyCommentSchema = zod.object({
  id: zod.string().uuid(),
  content: zod.string().min(1),
  supply: SupplySchema,
  writtenBy: WrittenBySchema,
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("SupplyComment").default("SupplyComment"), // CASL Subject Type
});

export const CreateSupplyCommentSchema = zod.object({
  content: zod.string().min(1),
  writtenBy: zod.string().uuid(),
});

export const UpdateSupplyCommentSchema = zod
  .object({
    content: zod.string().min(1),
  })
  .partial();

export const FindUniqueSupplyCommentSchema = zod
  .object({
    id: zod.string().uuid(),
  })
  .partial();

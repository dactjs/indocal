import { z as zod } from "zod";

import { USERNAME_PATTERN } from "../constants";

///////////
// Types //
///////////

export type Supply = zod.infer<typeof SupplySchema>;

export type CreateSupplyData = zod.infer<typeof CreateSupplySchema>;

export type UpdateSupplyData = zod.infer<typeof UpdateSupplySchema>;

export type FindUniqueSupplyQuery = zod.infer<typeof FindUniqueSupplySchema>;

/////////////
// Schemas //
/////////////

const UserSchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
});

export const SupplySchema = zod.object({
  id: zod.string().uuid(),
  brand: zod.string().min(1),
  model: zod.string().min(1),
  serial: zod.string().min(1),
  assignedTo: UserSchema.nullable(),
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("Supply").default("Supply"), // CASL Subject Type
});

export const CreateSupplySchema = zod.object({
  brand: zod.string().min(1),
  model: zod.string().min(1),
  serial: zod.string().min(1),
  createdBy: zod.string().uuid(),
});

export const UpdateSupplySchema = zod
  .object({
    brand: zod.string().min(1),
    model: zod.string().min(1),
    serial: zod.string().min(1),
  })
  .partial();

export const FindUniqueSupplySchema = zod
  .object({
    id: zod.string().uuid(),
    serial: zod.string().min(1),
  })
  .partial();

////////////////
// Re-exports //
////////////////

export * from "./comments";
export * from "./traces";

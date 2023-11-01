import { z as zod } from "zod";

import { USERNAME_PATTERN } from "../../constants";

///////////
// Types //
///////////

export type BaseSupplyTrace = zod.infer<typeof BaseSupplyTraceSchema>;

/////////////
// Schemas //
/////////////

export const UserSchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
});

const SupplySchema = zod.object({
  id: zod.string().uuid(),
  brand: zod.string().min(1),
  model: zod.string().min(1),
  serial: zod.string().min(1),
});

export const BaseSupplyTraceSchema = zod.object({
  id: zod.string().uuid(),
  supply: SupplySchema,
  madeBy: UserSchema,
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("SupplyTrace").default("SupplyTrace"), // CASL Subject Type
});

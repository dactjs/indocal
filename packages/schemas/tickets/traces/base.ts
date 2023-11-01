import { z as zod } from "zod";

import { USERNAME_PATTERN } from "../../constants";

///////////
// Types //
///////////

export type BaseTicketTrace = zod.infer<typeof BaseTicketTraceSchema>;

/////////////
// Schemas //
/////////////

export const UserSchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
});

const TicketSchema = zod.object({
  id: zod.string().uuid(),
  issue: zod.string().min(1),
  solution: zod.string().min(1).nullable(),
});

export const BaseTicketTraceSchema = zod.object({
  id: zod.string().uuid(),
  ticket: TicketSchema,
  madeBy: UserSchema,
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("TicketTrace").default("TicketTrace"), // CASL Subject Type
});

import { z as zod } from "zod";

import { TICKET_STATUS_TUPLE, USERNAME_PATTERN } from "../constants";

///////////
// Types //
///////////

export type Ticket = zod.infer<typeof TicketSchema>;

export type CreateTicketData = zod.infer<typeof CreateTicketSchema>;

export type UpdateTicketData = zod.infer<typeof UpdateTicketSchema>;

export type FindUniqueTicketQuery = zod.infer<typeof FindUniqueTicketSchema>;

/////////////
// Schemas //
/////////////

const ServiceCategorySchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
});

const ServiceSchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
  category: ServiceCategorySchema,
});

const UserSchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
});

export const TicketSchema = zod.object({
  id: zod.string().uuid(),
  issue: zod.string().min(1),
  solution: zod.string().min(1).nullable(),
  status: zod.enum(TICKET_STATUS_TUPLE),
  service: ServiceSchema,
  sentBy: UserSchema,
  assignedTo: UserSchema.nullable(),
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("Ticket").default("Ticket"), // CASL Subject Type
});

export const CreateTicketSchema = zod.object({
  issue: zod.string().min(1),
  service: zod.string().uuid(),
  sentBy: zod.string().uuid(),
});

export const UpdateTicketSchema = zod
  .object({
    service: zod.string().uuid(),
  })
  .partial();

export const FindUniqueTicketSchema = zod
  .object({
    id: zod.string().uuid(),
  })
  .partial();

////////////////
// Re-exports //
////////////////

export * from "./services";
export * from "./service-categories";
export * from "./comments";
export * from "./traces";

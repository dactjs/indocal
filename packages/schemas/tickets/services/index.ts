import { z as zod } from "zod";

///////////
// Types //
///////////

export type TicketService = zod.infer<typeof TicketServiceSchema>;

export type CreateTicketServiceData = zod.infer<
  typeof CreateTicketServiceSchema
>;

export type UpdateTicketServiceData = zod.infer<
  typeof UpdateTicketServiceSchema
>;

export type FindUniqueTicketServiceQuery = zod.infer<
  typeof FindUniqueTicketServiceSchema
>;

/////////////
// Schemas //
/////////////

const CategorySchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
});

export const TicketServiceSchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
  category: CategorySchema,
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("TicketService").default("TicketService"), // CASL Subject Type
});

export const CreateTicketServiceSchema = zod.object({
  name: zod.string().min(1),
});

export const UpdateTicketServiceSchema = zod
  .object({
    name: zod.string().min(1),
  })
  .partial();

export const FindUniqueTicketServiceSchema = zod
  .object({
    id: zod.string().uuid(),
    name: zod.string().min(1),
  })
  .partial();

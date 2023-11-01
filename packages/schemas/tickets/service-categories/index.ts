import { z as zod } from "zod";

///////////
// Types //
///////////

export type TicketServiceCategory = zod.infer<
  typeof TicketServiceCategorySchema
>;

export type CreateTicketServiceCategoryData = zod.infer<
  typeof CreateTicketServiceCategorySchema
>;

export type UpdateTicketServiceCategoryData = zod.infer<
  typeof UpdateTicketServiceCategorySchema
>;

export type FindUniqueTicketServiceCategoryQuery = zod.infer<
  typeof FindUniqueTicketServiceCategorySchema
>;

/////////////
// Schemas //
/////////////

export const TicketServiceCategorySchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod
    .literal("TicketServiceCategory")
    .default("TicketServiceCategory"), // CASL Subject Type
});

export const CreateTicketServiceCategorySchema = zod.object({
  name: zod.string().min(1),
});

export const UpdateTicketServiceCategorySchema = zod
  .object({
    name: zod.string().min(1),
  })
  .partial();

export const FindUniqueTicketServiceCategorySchema = zod
  .object({
    id: zod.string().uuid(),
    name: zod.string().min(1),
  })
  .partial();

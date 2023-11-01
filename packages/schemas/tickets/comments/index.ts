import { z as zod } from "zod";

import { USERNAME_PATTERN } from "../../constants";

///////////
// Types //
///////////

export type TicketComment = zod.infer<typeof TicketCommentSchema>;

export type CreateTicketCommentData = zod.infer<
  typeof CreateTicketCommentSchema
>;

export type UpdateTicketCommentData = zod.infer<
  typeof UpdateTicketCommentSchema
>;

export type FindUniqueTicketCommentQuery = zod.infer<
  typeof FindUniqueTicketCommentSchema
>;

/////////////
// Schemas //
/////////////

const TicketSchema = zod.object({
  id: zod.string().uuid(),
  issue: zod.string().min(1),
  solution: zod.string().min(1).nullable(),
});

const WrittenBySchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
});

export const TicketCommentSchema = zod.object({
  id: zod.string().uuid(),
  content: zod.string().min(1),
  ticket: TicketSchema,
  writtenBy: WrittenBySchema,
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("TicketComment").default("TicketComment"), // CASL Subject Type
});

export const CreateTicketCommentSchema = zod.object({
  content: zod.string().min(1),
  writtenBy: zod.string().uuid(),
});

export const UpdateTicketCommentSchema = zod
  .object({
    content: zod.string().min(1),
  })
  .partial();

export const FindUniqueTicketCommentSchema = zod
  .object({
    id: zod.string().uuid(),
  })
  .partial();

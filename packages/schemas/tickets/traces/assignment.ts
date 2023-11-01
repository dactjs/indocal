import { z as zod } from "zod";

import { TicketTraceType } from "../../constants";

import { BaseTicketTraceSchema, UserSchema } from "./base";

///////////
// Types //
///////////

export type AssignmentTicketTrace = zod.infer<
  typeof AssignmentTicketTraceSchema
>;

export type CreateAssignmentTicketTraceData = zod.infer<
  typeof CreateAssignmentTicketTraceSchema
>;

/////////////
// Schemas //
/////////////

export const AssignmentTicketTraceSchema = BaseTicketTraceSchema.extend({
  type: zod.literal(TicketTraceType.ASSIGNMENT),
  destination: UserSchema,
});

export const CreateAssignmentTicketTraceSchema = zod.object({
  type: zod.literal(TicketTraceType.ASSIGNMENT),
  destination: zod.string().uuid(),
  madeBy: zod.string().uuid(),
});

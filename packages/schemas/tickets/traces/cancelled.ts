import { z as zod } from "zod";

import { TicketTraceType } from "../../constants";

import { BaseTicketTraceSchema } from "./base";

///////////
// Types //
///////////

export type CancelledTicketTrace = zod.infer<typeof CancelledTicketTraceSchema>;

export type CreateCancelledTicketTraceData = zod.infer<
  typeof CreateCancelledTicketTraceSchema
>;

/////////////
// Schemas //
/////////////

export const CancelledTicketTraceSchema = BaseTicketTraceSchema.extend({
  type: zod.literal(TicketTraceType.CANCELLED),
});

export const CreateCancelledTicketTraceSchema = zod.object({
  type: zod.literal(TicketTraceType.CANCELLED),
  madeBy: zod.string().uuid(),
});

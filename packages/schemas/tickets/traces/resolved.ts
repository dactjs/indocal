import { z as zod } from "zod";

import { TicketTraceType } from "../../constants";

import { BaseTicketTraceSchema } from "./base";

///////////
// Types //
///////////

export type ResolvedTicketTrace = zod.infer<typeof ResolvedTicketTraceSchema>;

export type CreateResolvedTicketTraceData = zod.infer<
  typeof CreateResolvedTicketTraceSchema
>;

/////////////
// Schemas //
/////////////

export const ResolvedTicketTraceSchema = BaseTicketTraceSchema.extend({
  type: zod.literal(TicketTraceType.RESOLVED),
});

export const CreateResolvedTicketTraceSchema = zod.object({
  type: zod.literal(TicketTraceType.RESOLVED),
  madeBy: zod.string().uuid(),
});

import { z as zod } from "zod";

import { TicketTraceType } from "../../constants";

import { BaseTicketTraceSchema } from "./base";

///////////
// Types //
///////////

export type ClosedTicketTrace = zod.infer<typeof ClosedTicketTraceSchema>;

export type CreateClosedTicketTraceData = zod.infer<
  typeof CreateClosedTicketTraceSchema
>;

/////////////
// Schemas //
/////////////

export const ClosedTicketTraceSchema = BaseTicketTraceSchema.extend({
  type: zod.literal(TicketTraceType.CLOSED),
});

export const CreateClosedTicketTraceSchema = zod.object({
  type: zod.literal(TicketTraceType.CLOSED),
  madeBy: zod.string().uuid(),
});

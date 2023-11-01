import { z as zod } from "zod";

import { TicketTraceType } from "../../constants";

import { BaseTicketTraceSchema } from "./base";

///////////
// Types //
///////////

export type OpenedTicketTrace = zod.infer<typeof OpenedTicketTraceSchema>;

export type CreateOpenedTicketTraceData = zod.infer<
  typeof CreateOpenedTicketTraceSchema
>;

/////////////
// Schemas //
/////////////

export const OpenedTicketTraceSchema = BaseTicketTraceSchema.extend({
  type: zod.literal(TicketTraceType.OPENED),
});

export const CreateOpenedTicketTraceSchema = zod.object({
  type: zod.literal(TicketTraceType.OPENED),
  madeBy: zod.string().uuid(),
});

import { z as zod } from "zod";

import { TicketTraceType } from "../../constants";

import { BaseTicketTraceSchema } from "./base";

///////////
// Types //
///////////

export type ReceptionTicketTrace = zod.infer<typeof ReceptionTicketTraceSchema>;

export type CreateReceptionTicketTraceData = zod.infer<
  typeof CreateReceptionTicketTraceSchema
>;

/////////////
// Schemas //
/////////////

export const ReceptionTicketTraceSchema = BaseTicketTraceSchema.extend({
  type: zod.literal(TicketTraceType.RECEPTION),
});

export const CreateReceptionTicketTraceSchema = zod.object({
  type: zod.literal(TicketTraceType.RECEPTION),
  madeBy: zod.string().uuid(),
});

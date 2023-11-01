import { z as zod } from "zod";

import { TicketTraceType } from "../../constants";

import { BaseTicketTraceSchema, UserSchema } from "./base";

///////////
// Types //
///////////

export type TransferTicketTrace = zod.infer<typeof TransferTicketTraceSchema>;

export type CreateTransferTicketTraceData = zod.infer<
  typeof CreateTransferTicketTraceSchema
>;

/////////////
// Schemas //
/////////////

export const TransferTicketTraceSchema = BaseTicketTraceSchema.extend({
  type: zod.literal(TicketTraceType.TRANSFER),
  origin: UserSchema,
  destination: UserSchema,
});

export const CreateTransferTicketTraceSchema = zod.object({
  type: zod.literal(TicketTraceType.TRANSFER),
  destination: zod.string().uuid(),
  madeBy: zod.string().uuid(),
});

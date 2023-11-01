import { z as zod } from "zod";

import { SupplyTraceType } from "../../constants";

import { BaseSupplyTraceSchema, UserSchema } from "./base";

///////////
// Types //
///////////

export type TransferSupplyTrace = zod.infer<typeof TransferSupplyTraceSchema>;

export type CreateTransferSupplyTraceData = zod.infer<
  typeof CreateTransferSupplyTraceSchema
>;

/////////////
// Schemas //
/////////////

export const TransferSupplyTraceSchema = BaseSupplyTraceSchema.extend({
  type: zod.literal(SupplyTraceType.TRANSFER),
  origin: UserSchema,
  destination: UserSchema,
});

export const CreateTransferSupplyTraceSchema = zod.object({
  type: zod.literal(SupplyTraceType.TRANSFER),
  destination: zod.string().uuid(),
  madeBy: zod.string().uuid(),
});

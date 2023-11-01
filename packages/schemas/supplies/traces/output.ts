import { z as zod } from "zod";

import { SupplyTraceType } from "../../constants";

import { BaseSupplyTraceSchema } from "./base";

///////////
// Types //
///////////

export type OutputSupplyTrace = zod.infer<typeof OutputSupplyTraceSchema>;

export type CreateOutputSupplyTraceData = zod.infer<
  typeof CreateOutputSupplyTraceSchema
>;

/////////////
// Schemas //
/////////////

export const OutputSupplyTraceSchema = BaseSupplyTraceSchema.extend({
  type: zod.literal(SupplyTraceType.OUTPUT),
});

export const CreateOutputSupplyTraceSchema = zod.object({
  type: zod.literal(SupplyTraceType.OUTPUT),
  madeBy: zod.string().uuid(),
});

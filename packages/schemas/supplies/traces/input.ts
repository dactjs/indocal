import { z as zod } from "zod";

import { SupplyTraceType } from "../../constants";

import { BaseSupplyTraceSchema } from "./base";

///////////
// Types //
///////////

export type InputSupplyTrace = zod.infer<typeof InputSupplyTraceSchema>;

export type CreateInputSupplyTraceData = zod.infer<
  typeof CreateInputSupplyTraceSchema
>;

/////////////
// Schemas //
/////////////

export const InputSupplyTraceSchema = BaseSupplyTraceSchema.extend({
  type: zod.literal(SupplyTraceType.INPUT),
});

export const CreateInputSupplyTraceSchema = zod.object({
  type: zod.literal(SupplyTraceType.INPUT),
  madeBy: zod.string().uuid(),
});

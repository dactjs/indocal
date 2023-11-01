import { z as zod } from "zod";

import { SupplyTraceType } from "../../constants";

import { BaseSupplyTraceSchema } from "./base";

///////////
// Types //
///////////

export type RepairSupplyTrace = zod.infer<typeof RepairSupplyTraceSchema>;

export type CreateRepairSupplyTraceData = zod.infer<
  typeof CreateRepairSupplyTraceSchema
>;

/////////////
// Schemas //
/////////////

export const RepairSupplyTraceSchema = BaseSupplyTraceSchema.extend({
  type: zod.literal(SupplyTraceType.REPAIR),
});

export const CreateRepairSupplyTraceSchema = zod.object({
  type: zod.literal(SupplyTraceType.REPAIR),
  madeBy: zod.string().uuid(),
});

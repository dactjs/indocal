import { z as zod } from "zod";

import { SupplyTraceType } from "../../constants";

import { BaseSupplyTraceSchema, UserSchema } from "./base";

///////////
// Types //
///////////

export type UnassignmentSupplyTrace = zod.infer<
  typeof UnassignmentSupplyTraceSchema
>;

export type CreateUnassignmentSupplyTraceData = zod.infer<
  typeof CreateUnassignmentSupplyTraceSchema
>;

/////////////
// Schemas //
/////////////

export const UnassignmentSupplyTraceSchema = BaseSupplyTraceSchema.extend({
  type: zod.literal(SupplyTraceType.UNASSIGNMENT),
  origin: UserSchema,
});

export const CreateUnassignmentSupplyTraceSchema = zod.object({
  type: zod.literal(SupplyTraceType.UNASSIGNMENT),
  madeBy: zod.string().uuid(),
});

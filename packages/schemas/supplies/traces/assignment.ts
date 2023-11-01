import { z as zod } from "zod";

import { SupplyTraceType } from "../../constants";

import { BaseSupplyTraceSchema, UserSchema } from "./base";

///////////
// Types //
///////////

export type AssignmentSupplyTrace = zod.infer<
  typeof AssignmentSupplyTraceSchema
>;

export type CreateAssignmentSupplyTraceData = zod.infer<
  typeof CreateAssignmentSupplyTraceSchema
>;

/////////////
// Schemas //
/////////////

export const AssignmentSupplyTraceSchema = BaseSupplyTraceSchema.extend({
  type: zod.literal(SupplyTraceType.ASSIGNMENT),
  destination: UserSchema,
});

export const CreateAssignmentSupplyTraceSchema = zod.object({
  type: zod.literal(SupplyTraceType.ASSIGNMENT),
  destination: zod.string().uuid(),
  madeBy: zod.string().uuid(),
});

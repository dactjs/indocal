import { z as zod } from "zod";

import { InputSupplyTraceSchema, CreateInputSupplyTraceSchema } from "./input";
import {
  AssignmentSupplyTraceSchema,
  CreateAssignmentSupplyTraceSchema,
} from "./assignment";
import {
  TransferSupplyTraceSchema,
  CreateTransferSupplyTraceSchema,
} from "./transfer";
import {
  UnassignmentSupplyTraceSchema,
  CreateUnassignmentSupplyTraceSchema,
} from "./unassignment";
import {
  RepairSupplyTraceSchema,
  CreateRepairSupplyTraceSchema,
} from "./repair";
import {
  OutputSupplyTraceSchema,
  CreateOutputSupplyTraceSchema,
} from "./output";

///////////
// Types //
///////////

export type SupplyTrace = zod.infer<typeof SupplyTraceSchema>;

export type CreateSupplyTraceData = zod.infer<typeof CreateSupplyTraceSchema>;

export type FindUniqueSupplyTraceQuery = zod.infer<
  typeof FindUniqueSupplyTraceSchema
>;

/////////////
// Schemas //
/////////////

export const SupplyTraceSchema = zod.union([
  InputSupplyTraceSchema,
  AssignmentSupplyTraceSchema,
  TransferSupplyTraceSchema,
  UnassignmentSupplyTraceSchema,
  RepairSupplyTraceSchema,
  OutputSupplyTraceSchema,
]);

export const CreateSupplyTraceSchema = zod.union([
  CreateInputSupplyTraceSchema,
  CreateAssignmentSupplyTraceSchema,
  CreateTransferSupplyTraceSchema,
  CreateUnassignmentSupplyTraceSchema,
  CreateRepairSupplyTraceSchema,
  CreateOutputSupplyTraceSchema,
]);

export const FindUniqueSupplyTraceSchema = zod
  .object({
    id: zod.string().uuid(),
  })
  .partial();

////////////////
// Re-exports //
////////////////

export * from "./input";
export * from "./assignment";
export * from "./transfer";
export * from "./unassignment";
export * from "./repair";
export * from "./output";

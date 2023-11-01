import { z as zod } from "zod";

import {
  ReceptionTicketTraceSchema,
  CreateReceptionTicketTraceSchema,
} from "./reception";
import {
  AssignmentTicketTraceSchema,
  CreateAssignmentTicketTraceSchema,
} from "./assignment";
import {
  TransferTicketTraceSchema,
  CreateTransferTicketTraceSchema,
} from "./transfer";
import {
  OpenedTicketTraceSchema,
  CreateOpenedTicketTraceSchema,
} from "./opened";
import {
  ResolvedTicketTraceSchema,
  CreateResolvedTicketTraceSchema,
} from "./resolved";
import {
  ClosedTicketTraceSchema,
  CreateClosedTicketTraceSchema,
} from "./closed";
import {
  CancelledTicketTraceSchema,
  CreateCancelledTicketTraceSchema,
} from "./cancelled";

///////////
// Types //
///////////

export type TicketTrace = zod.infer<typeof TicketTraceSchema>;

export type CreateTicketTraceData = zod.infer<typeof CreateTicketTraceSchema>;

export type FindUniqueTicketTraceQuery = zod.infer<
  typeof FindUniqueTicketTraceSchema
>;

/////////////
// Schemas //
/////////////

export const TicketTraceSchema = zod.union([
  ReceptionTicketTraceSchema,
  AssignmentTicketTraceSchema,
  TransferTicketTraceSchema,
  OpenedTicketTraceSchema,
  ResolvedTicketTraceSchema,
  ClosedTicketTraceSchema,
  CancelledTicketTraceSchema,
]);

export const CreateTicketTraceSchema = zod.union([
  CreateReceptionTicketTraceSchema,
  CreateAssignmentTicketTraceSchema,
  CreateTransferTicketTraceSchema,
  CreateOpenedTicketTraceSchema,
  CreateResolvedTicketTraceSchema,
  CreateClosedTicketTraceSchema,
  CreateCancelledTicketTraceSchema,
]);

export const FindUniqueTicketTraceSchema = zod
  .object({
    id: zod.string().uuid(),
  })
  .partial();

////////////////
// Re-exports //
////////////////

export * from "./reception";
export * from "./assignment";
export * from "./transfer";
export * from "./opened";
export * from "./resolved";
export * from "./closed";
export * from "./cancelled";

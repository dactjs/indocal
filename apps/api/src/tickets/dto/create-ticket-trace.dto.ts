import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";
import { z as zod } from "zod";

import {
  CreateReceptionTicketTraceSchema,
  CreateAssignmentTicketTraceSchema,
  CreateTransferTicketTraceSchema,
  CreateOpenedTicketTraceSchema,
  CreateResolvedTicketTraceSchema,
  CreateClosedTicketTraceSchema,
  CreateCancelledTicketTraceSchema,
} from "@indocal/schemas";

const Schema = zod.union([
  CreateReceptionTicketTraceSchema,
  CreateAssignmentTicketTraceSchema,
  CreateTransferTicketTraceSchema,
  CreateOpenedTicketTraceSchema,
  CreateResolvedTicketTraceSchema,
  CreateClosedTicketTraceSchema,
  CreateCancelledTicketTraceSchema,
]);

const schema = extendApi(Schema, {
  title: "CreateTicketTraceData",
  description: "Data for creating a ticket trace",
});

export class CreateTicketTraceDto extends createZodDto(schema) {}

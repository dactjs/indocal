import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";
import { z as zod } from "zod";

import {
  CreateInputSupplyTraceSchema,
  CreateAssignmentSupplyTraceSchema,
  CreateTransferSupplyTraceSchema,
  CreateUnassignmentSupplyTraceSchema,
  CreateRepairSupplyTraceSchema,
  CreateOutputSupplyTraceSchema,
} from "@indocal/schemas";

const Schema = zod.union([
  CreateInputSupplyTraceSchema,
  CreateAssignmentSupplyTraceSchema,
  CreateTransferSupplyTraceSchema,
  CreateUnassignmentSupplyTraceSchema,
  CreateRepairSupplyTraceSchema,
  CreateOutputSupplyTraceSchema,
]);

const schema = extendApi(Schema, {
  title: "CreateSupplyTraceData",
  description: "Data for creating a supply trace",
});

export class CreateSupplyTraceDto extends createZodDto(schema) {}

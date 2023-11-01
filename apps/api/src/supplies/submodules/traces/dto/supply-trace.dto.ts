import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { SupplyTraceSchema } from "@indocal/schemas";

const schema = extendApi(SupplyTraceSchema, {
  title: "SupplyTrace",
  description: "A supply trace like assignment or transfer",
});

export class SupplyTraceDto extends createZodDto(schema) {}

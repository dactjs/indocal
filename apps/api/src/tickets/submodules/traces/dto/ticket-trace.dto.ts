import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { TicketTraceSchema } from "@indocal/schemas";

const schema = extendApi(TicketTraceSchema, {
  title: "TicketTrace",
  description: "A ticket trace like assignment or transfer",
});

export class TicketTraceDto extends createZodDto(schema) {}

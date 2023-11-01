import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { TicketSchema } from "@indocal/schemas";

const schema = extendApi(TicketSchema, {
  title: "Ticket",
  description: "A support ticket for the IT department",
});

export class TicketDto extends createZodDto(schema) {}

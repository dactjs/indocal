import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { TicketServiceSchema } from "@indocal/schemas";

const schema = extendApi(TicketServiceSchema, {
  title: "TicketService",
  description: "A service for a support ticket",
});

export class TicketServiceDto extends createZodDto(schema) {}

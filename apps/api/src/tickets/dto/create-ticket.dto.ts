import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateTicketSchema } from "@indocal/schemas";

const schema = extendApi(CreateTicketSchema, {
  title: "CreateTicketData",
  description: "Data for creating a ticket",
});

export class CreateTicketDto extends createZodDto(schema) {}

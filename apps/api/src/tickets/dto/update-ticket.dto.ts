import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateTicketSchema } from "@indocal/schemas";

const schema = extendApi(UpdateTicketSchema, {
  title: "UpdateTicketData",
  description: "Data for updating a ticket",
});

export class UpdateTicketDto extends createZodDto(schema) {}

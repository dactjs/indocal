import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateTicketServiceSchema } from "@indocal/schemas";

const schema = extendApi(UpdateTicketServiceSchema, {
  title: "UpdateTicketServiceData",
  description: "Data for updating a ticket service",
});

export class UpdateTicketServiceDto extends createZodDto(schema) {}

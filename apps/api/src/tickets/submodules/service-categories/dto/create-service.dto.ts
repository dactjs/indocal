import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateTicketServiceSchema } from "@indocal/schemas";

const schema = extendApi(CreateTicketServiceSchema, {
  title: "CreateTicketServiceData",
  description: "Data for creating a ticket service",
});

export class CreateTicketServiceDto extends createZodDto(schema) {}

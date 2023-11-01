import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateTicketServiceCategorySchema } from "@indocal/schemas";

const schema = extendApi(CreateTicketServiceCategorySchema, {
  title: "CreateTicketServiceCategoryData",
  description: "Data for creating a ticket service category",
});

export class CreateTicketServiceCategoryDto extends createZodDto(schema) {}

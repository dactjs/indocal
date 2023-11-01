import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateTicketServiceCategorySchema } from "@indocal/schemas";

const schema = extendApi(UpdateTicketServiceCategorySchema, {
  title: "UpdateTicketServiceCategoryData",
  description: "Data for updating a ticket service category",
});

export class UpdateTicketServiceCategoryDto extends createZodDto(schema) {}

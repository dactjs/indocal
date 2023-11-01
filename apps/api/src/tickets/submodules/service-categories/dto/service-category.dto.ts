import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { TicketServiceCategorySchema } from "@indocal/schemas";

const schema = extendApi(TicketServiceCategorySchema, {
  title: "TicketServiceCategory",
  description: "A category of service for a support ticket",
});

export class TicketServiceCategoryDto extends createZodDto(schema) {}

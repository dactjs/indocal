import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateTicketCommentSchema } from "@indocal/schemas";

const schema = extendApi(CreateTicketCommentSchema, {
  title: "CreateTicketCommentData",
  description: "Data for creating a ticket comment",
});

export class CreateTicketCommentDto extends createZodDto(schema) {}

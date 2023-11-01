import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateTicketCommentSchema } from "@indocal/schemas";

const schema = extendApi(UpdateTicketCommentSchema, {
  title: "UpdateTicketCommentData",
  description: "Data for updating a ticket comment",
});

export class UpdateTicketCommentDto extends createZodDto(schema) {}

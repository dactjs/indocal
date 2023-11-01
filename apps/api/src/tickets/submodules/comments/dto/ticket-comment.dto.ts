import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { TicketCommentSchema } from "@indocal/schemas";

const schema = extendApi(TicketCommentSchema, {
  title: "TicketComment",
  description: "A comment on a ticket",
});

export class TicketCommentDto extends createZodDto(schema) {}

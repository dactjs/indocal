import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { SupplyCommentSchema } from "@indocal/schemas";

const schema = extendApi(SupplyCommentSchema, {
  title: "SupplyComment",
  description: "A comment on a supply",
});

export class SupplyCommentDto extends createZodDto(schema) {}

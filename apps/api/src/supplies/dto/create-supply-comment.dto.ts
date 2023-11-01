import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateSupplyCommentSchema } from "@indocal/schemas";

const schema = extendApi(CreateSupplyCommentSchema, {
  title: "CreateSupplyCommentData",
  description: "Data for creating a supply comment",
});

export class CreateSupplyCommentDto extends createZodDto(schema) {}

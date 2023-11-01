import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateSupplyCommentSchema } from "@indocal/schemas";

const schema = extendApi(UpdateSupplyCommentSchema, {
  title: "UpdateSupplyCommentData",
  description: "Data for updating a supply comment",
});

export class UpdateSupplyCommentDto extends createZodDto(schema) {}

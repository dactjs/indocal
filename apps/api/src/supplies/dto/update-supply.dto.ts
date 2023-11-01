import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateSupplySchema } from "@indocal/schemas";

const schema = extendApi(UpdateSupplySchema, {
  title: "UpdateSupplyData",
  description: "Data for updating a supply",
});

export class UpdateSupplyDto extends createZodDto(schema) {}

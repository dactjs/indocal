import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateSupplySchema } from "@indocal/schemas";

const schema = extendApi(CreateSupplySchema, {
  title: "CreateSupplyData",
  description: "Data for creating a supply",
});

export class CreateSupplyDto extends createZodDto(schema) {}

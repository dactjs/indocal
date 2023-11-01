import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { SupplySchema } from "@indocal/schemas";

const schema = extendApi(SupplySchema, {
  title: "Supply",
  description: "A supply like a laptop or a mouse",
});

export class SupplyDto extends createZodDto(schema) {}

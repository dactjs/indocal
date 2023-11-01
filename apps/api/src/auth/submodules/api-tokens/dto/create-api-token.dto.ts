import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateApiTokenSchema } from "@indocal/schemas";

const schema = extendApi(CreateApiTokenSchema, {
  title: "CreateApiTokenData",
  description: "Data for creating an API token",
});

export class CreateApiTokenDto extends createZodDto(schema) {}

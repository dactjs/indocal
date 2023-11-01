import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateApiTokenSchema } from "@indocal/schemas";

const schema = extendApi(CreateApiTokenSchema, {
  title: "Api Token",
  description: "A token for accessing the API",
});

export class CreateApiTokenDto extends createZodDto(schema) {}

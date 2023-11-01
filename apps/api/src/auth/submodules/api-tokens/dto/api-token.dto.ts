import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { ApiTokenSchema } from "@indocal/schemas";

const schema = extendApi(ApiTokenSchema, {
  title: "Api Token",
  description: "A token for accessing the API",
});

export class ApiTokenDto extends createZodDto(schema) {}

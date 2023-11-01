import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateApiTokenSchema } from "@indocal/schemas";

const schema = extendApi(UpdateApiTokenSchema, {
  title: "Api Token",
  description: "A token for accessing the API",
});

export class UpdateApiTokenDto extends createZodDto(schema) {}

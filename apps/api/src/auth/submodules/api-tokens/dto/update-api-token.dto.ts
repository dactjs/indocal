import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateApiTokenSchema } from "@indocal/schemas";

const schema = extendApi(UpdateApiTokenSchema, {
  title: "UpdateApiTokenData",
  description: "Data for updating an API token",
});

export class UpdateApiTokenDto extends createZodDto(schema) {}

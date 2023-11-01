import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateUserSchema } from "@indocal/schemas";

const schema = extendApi(UpdateUserSchema, {
  title: "UpdateUserData",
  description: "A user of the application",
});

export class UpdateUserDto extends createZodDto(schema) {}

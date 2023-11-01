import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateUserSchema } from "@indocal/schemas";

const schema = extendApi(UpdateUserSchema, {
  title: "UpdateUserData",
  description: "Data for updating a user",
});

export class UpdateUserDto extends createZodDto(schema) {}

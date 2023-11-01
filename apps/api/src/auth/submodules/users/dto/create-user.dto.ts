import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateUserSchema } from "@indocal/schemas";

const schema = extendApi(CreateUserSchema, {
  title: "CreateUserData",
  description: "A user of the application",
});

export class CreateUserDto extends createZodDto(schema) {}

import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateUserSchema } from "@indocal/schemas";

const schema = extendApi(CreateUserSchema, {
  title: "CreateUserData",
  description: "Data for creating a user",
});

export class CreateUserDto extends createZodDto(schema) {}

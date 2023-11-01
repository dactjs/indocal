import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UserSchema } from "@indocal/schemas";

const schema = extendApi(UserSchema, {
  title: "User",
  description: "A user of the application",
});

export class UserDto extends createZodDto(schema) {}

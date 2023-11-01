import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateUserGroupSchema } from "@indocal/schemas";

const schema = extendApi(CreateUserGroupSchema, {
  title: "CreateUserGroupData",
  description: "A group of users of the application",
});

export class CreateUserGroupDto extends createZodDto(schema) {}

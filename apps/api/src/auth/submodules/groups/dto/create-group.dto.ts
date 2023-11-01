import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { CreateUserGroupSchema } from "@indocal/schemas";

const schema = extendApi(CreateUserGroupSchema, {
  title: "CreateUserGroupData",
  description: "Data for creating a user group",
});

export class CreateUserGroupDto extends createZodDto(schema) {}

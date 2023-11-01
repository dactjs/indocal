import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UserGroupSchema } from "@indocal/schemas";

const schema = extendApi(UserGroupSchema, {
  title: "UserGroup",
  description: "A group of users of the application",
});

export class UserGroupDto extends createZodDto(schema) {}

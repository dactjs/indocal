import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateUserGroupSchema } from "@indocal/schemas";

const schema = extendApi(UpdateUserGroupSchema, {
  title: "UpdateUserGroupData",
  description: "A group of users of the application",
});

export class UpdateUserGroupDto extends createZodDto(schema) {}

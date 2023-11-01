import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { UpdateUserGroupSchema } from "@indocal/schemas";

const schema = extendApi(UpdateUserGroupSchema, {
  title: "UpdateUserGroupData",
  description: "Data for updating a user group",
});

export class UpdateUserGroupDto extends createZodDto(schema) {}

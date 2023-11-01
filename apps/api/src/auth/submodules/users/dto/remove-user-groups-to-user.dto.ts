import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { RemoveUserGroupsToUserSchema } from "@indocal/schemas";

const schema = extendApi(RemoveUserGroupsToUserSchema, {
  title: "RemoveUserGroupsToUserData",
  description: "Data for removing user groups to a user",
});

export class RemoveUserGroupsToUserDto extends createZodDto(schema) {}

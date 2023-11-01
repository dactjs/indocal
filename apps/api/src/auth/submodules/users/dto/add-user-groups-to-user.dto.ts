import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { AddUserGroupsToUserSchema } from "@indocal/schemas";

const schema = extendApi(AddUserGroupsToUserSchema, {
  title: "AddUserGroupsToUserData",
  description: "Data for adding user groups to a user",
});

export class AddUserGroupsToUserDto extends createZodDto(schema) {}

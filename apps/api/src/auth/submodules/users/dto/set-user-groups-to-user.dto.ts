import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { SetUserGroupsToUserSchema } from "@indocal/schemas";

const schema = extendApi(SetUserGroupsToUserSchema, {
  title: "SetUserGroupsToUserData",
  description: "Data for setting user groups to a user",
});

export class SetUserGroupsToUserDto extends createZodDto(schema) {}

import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { AddMembersToUserGroupSchema } from "@indocal/schemas";

const schema = extendApi(AddMembersToUserGroupSchema, {
  title: "AddMembersToUserGroupData",
  description: "Data for adding members to a user group",
});

export class AddMembersToUserGroupDto extends createZodDto(schema) {}

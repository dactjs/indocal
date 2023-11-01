import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { SetMembersToUserGroupSchema } from "@indocal/schemas";

const schema = extendApi(SetMembersToUserGroupSchema, {
  title: "SetMembersToUserGroupData",
  description: "Data for setting members to a user group",
});

export class SetMembersToUserGroupDto extends createZodDto(schema) {}

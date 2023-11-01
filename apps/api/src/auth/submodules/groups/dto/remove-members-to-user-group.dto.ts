import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { RemoveMembersToUserGroupSchema } from "@indocal/schemas";

const schema = extendApi(RemoveMembersToUserGroupSchema, {
  title: "RemoveMembersToUserGroupData",
  description: "Data for removing members to a user group",
});

export class RemoveMembersToUserGroupDto extends createZodDto(schema) {}

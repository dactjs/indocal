import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { SessionSchema } from "@indocal/schemas";

const schema = extendApi(SessionSchema, {
  title: "Session",
  description: "An authenticated user session",
});

export class SessionDto extends createZodDto(schema) {}

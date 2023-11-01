import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { JwtSchema } from "@indocal/schemas";

const schema = extendApi(JwtSchema, {
  title: "Jwt",
  description: "A JSON Web Token (JWT) for authenticating requests",
});

export class JwtDto extends createZodDto(schema) {}

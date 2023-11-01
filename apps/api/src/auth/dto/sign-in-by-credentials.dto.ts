import { createZodDto } from "@anatine/zod-nestjs";
import { extendApi } from "@anatine/zod-openapi";

import { SignInByCredentialsSchema } from "@indocal/schemas";

const schema = extendApi(SignInByCredentialsSchema, {
  title: "SignInByCredentialsData",
  description: "Data for signing in by credentials",
});

export class SignInByCredentialsDto extends createZodDto(schema) {}

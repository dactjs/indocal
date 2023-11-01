import { z as zod } from "zod";

import {
  API_TOKEN_TYPE_TUPLE,
  API_TOKEN_STATUS_TUPLE,
  JWT_PATTERN,
} from "../../constants";

///////////
// Types //
///////////

export type ApiToken = zod.infer<typeof ApiTokenSchema>;

export type CreateApiTokenData = zod.infer<typeof CreateApiTokenSchema>;

export type UpdateApiTokenData = zod.infer<typeof UpdateApiTokenSchema>;

export type FindUniqueApiTokenQuery = zod.infer<
  typeof FindUniqueApiTokenSchema
>;

/////////////
// Schemas //
/////////////

export const ApiTokenSchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
  description: zod.string().min(1),
  token: zod.string().regex(JWT_PATTERN),
  type: zod.enum(API_TOKEN_TYPE_TUPLE),
  status: zod.enum(API_TOKEN_STATUS_TUPLE),
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
  __caslSubjectType__: zod.literal("ApiToken").default("ApiToken"), // CASL Subject Type
});

export const CreateApiTokenSchema = zod.object({
  name: zod.string().min(1),
  description: zod.string().min(1),
  type: zod.enum(API_TOKEN_TYPE_TUPLE),
});

export const UpdateApiTokenSchema = zod
  .object({
    name: zod.string().min(1),
    description: zod.string().min(1),
    status: zod.enum(API_TOKEN_STATUS_TUPLE),
  })
  .partial();

export const FindUniqueApiTokenSchema = zod
  .object({
    id: zod.string().uuid(),
    name: zod.string().min(1),
    token: zod.string().regex(JWT_PATTERN), // type ApiTokenJwt
  })
  .partial();

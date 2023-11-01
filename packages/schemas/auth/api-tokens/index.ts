import { z as zod } from "zod";

import { API_TOKEN_TYPE_TUPLE, API_TOKEN_STATUS_TUPLE } from "../../constants";

///////////
// Types //
///////////

export type ApiToken = zod.infer<typeof ApiTokenSchema>;

export type CreateApiTokenData = zod.infer<typeof CreateApiTokenSchema>;

export type UpdateApiTokenData = zod.infer<typeof UpdateApiTokenSchema>;

export type FindOneApiTokenQuery = zod.infer<typeof FindOneApiTokenSchema>;

/////////////
// Schemas //
/////////////

export const ApiTokenSchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
  description: zod.string().min(1),
  token: zod.string().min(1),
  type: zod.enum(API_TOKEN_TYPE_TUPLE),
  status: zod.enum(API_TOKEN_STATUS_TUPLE),
  createdAt: zod.date().transform((date) => date.toISOString()),
  updatedAt: zod.date().transform((date) => date.toISOString()),
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

export const FindOneApiTokenSchema = zod
  .object({
    id: zod.string().uuid(),
    name: zod.string().min(1),
    description: zod.string().min(1),
  })
  .partial();

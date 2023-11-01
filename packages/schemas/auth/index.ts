import { z as zod } from "zod";

import { JwtType, JWT_PATTERN, USERNAME_PATTERN } from "../constants";

///////////
// Types //
///////////

export type Jwt = zod.infer<typeof JwtSchema>;

// --------- //
// Api Token //
// --------- //

export type AuthenticatedApiToken = zod.infer<
  typeof AuthenticatedApiTokenSchema
>;

export type ApiTokenJwt = zod.infer<typeof ApiTokenJwtSchema>;

// ---- //
// User //
// ---- //

export type AuthenticatedUser = zod.infer<typeof AuthenticatedUserSchema>;

export type UserJwt = zod.infer<typeof UserJwtSchema>;

export type Session = zod.infer<typeof SessionSchema>;

/////////////
// Schemas //
/////////////

// --------- //
// Api Token //
// --------- //

export const AuthenticatedApiTokenSchema = zod.object({
  id: zod.string().uuid(),
  name: zod.string().min(1),
  description: zod.string().min(1),
});

export const ApiTokenJwtSchema = zod.object({
  type: zod.literal(JwtType.API_TOKEN),
  apiToken: AuthenticatedApiTokenSchema,
});

// ---- //
// User //
// ---- //

export const AuthenticatedUserSchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
});

export const UserJwtSchema = zod.object({
  type: zod.literal(JwtType.USER),
  user: AuthenticatedUserSchema,
});

export const SessionSchema = zod.object({
  user: AuthenticatedUserSchema,
  access_token: zod.string().regex(JWT_PATTERN), // UserJwt
  issued_at: zod.date().transform((date) => date.toISOString()),
});

// --- //
// Jwt //
// --- //

export const JwtSchema = zod.union([ApiTokenJwtSchema, UserJwtSchema]);

////////////////
// Re-exports //
////////////////

export * from "./api-tokens";
export * from "./users";
export * from "./groups";

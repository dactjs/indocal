import { z as zod } from "zod";

import {
  JwtType,
  API_TOKEN_TYPE_TUPLE,
  API_TOKEN_STATUS_TUPLE,
  USER_STATUS_TUPLE,
  USER_ROLE_TUPLE,
  JWT_PATTERN,
  USERNAME_PATTERN,
  PASSWORD_PATTERN,
} from "../constants";

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

export type SignInByCredentialsData = zod.infer<
  typeof SignInByCredentialsSchema
>;

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
  type: zod.enum(API_TOKEN_TYPE_TUPLE),
  status: zod.enum(API_TOKEN_STATUS_TUPLE),
});

export const ApiTokenJwtSchema = zod.object({
  type: zod.literal(JwtType.API_TOKEN),
  apiToken: AuthenticatedApiTokenSchema,
});

// ---- //
// User //
// ---- //

export const SignInByCredentialsSchema = zod.object({
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  password: zod.string().min(1).regex(PASSWORD_PATTERN),
});

export const AuthenticatedUserSchema = zod.object({
  id: zod.string().uuid(),
  username: zod.string().min(1).regex(USERNAME_PATTERN),
  email: zod.string().email(),
  name: zod.string().min(1),
  status: zod.enum(USER_STATUS_TUPLE),
  roles: zod.enum(USER_ROLE_TUPLE).array(),
});

export const UserJwtSchema = zod.object({
  type: zod.literal(JwtType.USER),
  user: AuthenticatedUserSchema,
});

export const SessionSchema = zod.object({
  user: AuthenticatedUserSchema,
  access_token: zod.string().regex(JWT_PATTERN), // type UserJwt
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

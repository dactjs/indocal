//////////////
// Jwt Info //
//////////////

export const JWT_PATTERN = /^[\w-]+\.[\w-]+\.[\w-]+$/;

//////////////
// Jwt Type //
//////////////

export type JwtType = (typeof JwtType)[keyof typeof JwtType];

export const JwtType = {
  API_TOKEN: "api-token",
  USER: "user",
} as const;

////////////////
// Re-exports //
////////////////

export * from "./api-tokens";
export * from "./users";

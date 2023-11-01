export type PAGES = (typeof PAGES)[keyof typeof PAGES];

export const PAGES = {
  // Auth
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  RESET_PASSWORD: "/auth/reset-password",

  // Dashboard
  OVERVIEW: "/",
  SERVICES: "/services",
  FORMS: "/forms",
  UPLOADS: "/uploads",
  API_TOKENS: "/api-tokens",
  USERS: "/users",
  GROUPS: "/groups",
  LOGS: "/logs",
} as const;

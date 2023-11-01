export type PAGES = (typeof PAGES)[keyof typeof PAGES];

export const PAGES = {
  // Auth
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  RESET_PASSWORD: "/auth/reset-password",

  // Dashboard
  OVERVIEW: "/",
  TICKETS: "/tickets",
  SUPPLIES: "/supplies",
  USERS: "/users",
  GENERAL_ANALYTICS: "/analytics/overview",
  GROUP_ANALYTICS: "/analytics/groups",
  USER_ANALYTICS: "/analytics/users",
} as const;

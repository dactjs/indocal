///////////////
// User Info //
///////////////

export const USERNAME_PATTERN = /^[0-9a-zA-Z_]+$/;
export const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/;

/////////////////
// User Status //
/////////////////

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus];

export const UserStatus = {
  ENABLED: "ENABLED",
  DISABLED: "DISABLED",
} as const;

export const USER_STATUS_TUPLE: [UserStatus, ...UserStatus[]] = [
  UserStatus.ENABLED,
  UserStatus.DISABLED,
];

///////////////
// User Role //
///////////////

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const UserRole = {
  // Studio
  STUDIO_USER: "STUDIO_USER",

  // Hub
  HUB_USER: "HUB_USER",

  // App
  APP_USER: "APP_USER",

  // Nobu
  NOBU_GUEST: "NOBU_GUEST",
  NOBU_USER: "NOBU_USER",
  NOBU_ADMIN: "NOBU_ADMIN",
} as const;

export const USER_ROLE_TUPLE: [UserRole, ...UserRole[]] = [
  UserRole.STUDIO_USER,
  UserRole.HUB_USER,
  UserRole.APP_USER,
  UserRole.NOBU_GUEST,
  UserRole.NOBU_USER,
  UserRole.NOBU_ADMIN,
];

////////////////////
// Api Token Type //
////////////////////

export type ApiTokenType = (typeof ApiTokenType)[keyof typeof ApiTokenType];

export const ApiTokenType = {
  ANON: "ANON",
  SERVICE: "SERVICE",
} as const;

export const API_TOKEN_TYPE_TUPLE: [ApiTokenType, ...ApiTokenType[]] = [
  ApiTokenType.ANON,
  ApiTokenType.SERVICE,
];

//////////////////////
// Api Token Status //
//////////////////////

export type ApiTokenStatus =
  (typeof ApiTokenStatus)[keyof typeof ApiTokenStatus];

export const ApiTokenStatus = {
  ENABLED: "ENABLED",
  DISABLED: "DISABLED",
} as const;

export const API_TOKEN_STATUS_TUPLE: [ApiTokenStatus, ...ApiTokenStatus[]] = [
  ApiTokenStatus.ENABLED,
  ApiTokenStatus.DISABLED,
];

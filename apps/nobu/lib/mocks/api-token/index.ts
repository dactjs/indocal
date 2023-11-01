import type { ApiToken } from "@indocal/schemas";

export const ANON_TOKEN: ApiToken = {
  id: "1",
  name: "Anon",
  description: "Anon token",
  token: globalThis.crypto.randomUUID(),
  type: "ANON",
  status: "ENABLED",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const SERVICE_TOKEN: ApiToken = {
  id: "2",
  name: "Service",
  description: "Service token",
  token: globalThis.crypto.randomUUID(),
  type: "SERVICE",
  status: "ENABLED",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const API_TOKENS_MOCK: ApiToken[] = [ANON_TOKEN, SERVICE_TOKEN];

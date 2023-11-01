import type { User } from "@indocal/schemas";

export const DCRUZ: User = {
  id: "1",
  username: "dcruz",
  email: "dcruz@indocal.gob.do",
  name: "Diego Cruz",
  status: "ENABLED",
  roles: ["STUDIO_USER"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const DPASCUAL: User = {
  id: "2",
  username: "dpascual",
  email: "dpascual@indocal.gob.do",
  name: "Daniel Pascual",
  status: "ENABLED",
  roles: ["NOBU_USER"],
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const USERS_MOCK: User[] = [DCRUZ, DPASCUAL];

////////////////
// Re-exports //
////////////////

export * from "./groups";

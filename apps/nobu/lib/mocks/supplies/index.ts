import type { Supply } from "@indocal/schemas";

import { DCRUZ } from "../users";

import { GALAXY } from "./supply-traces";

export const IPHONE: Supply = {
  id: "1",
  brand: "Apple",
  model: "iPhone 12",
  serial: "0987654321",
  assignedTo: DCRUZ,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const SUPPLIES_MOCK: Supply[] = [GALAXY, IPHONE];

////////////////
// Re-exports //
////////////////

export * from "./comments";
export * from "./supply-traces";

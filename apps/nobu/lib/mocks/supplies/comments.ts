import type { SupplyComment } from "@indocal/schemas";

import { DCRUZ, DPASCUAL } from "../users";

import { GALAXY } from "./supply-traces";

export const SUPPLY_COMMENT_1: SupplyComment = {
  id: "1",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  supply: GALAXY,
  writtenBy: DCRUZ,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const SUPPLY_COMMENT_2: SupplyComment = {
  id: "2",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  supply: GALAXY,
  writtenBy: DPASCUAL,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const SUPPLY_COMMENTS_MOCK: SupplyComment[] = [
  SUPPLY_COMMENT_1,
  SUPPLY_COMMENT_2,
];

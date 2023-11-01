import type { InferSubjects } from "@casl/ability";

import type { Supply } from "@indocal/schemas";

import type { AppAbilityAction } from "../../constants";

export type SupplyAbilities = [
  (
    | typeof AppAbilityAction.CREATE
    | typeof AppAbilityAction.READ
    | typeof AppAbilityAction.UPDATE
    | typeof AppAbilityAction.DELETE
  ),
  InferSubjects<Supply>,
];

////////////////
// Re-exports //
////////////////

export * from "./comments";
export * from "./traces";

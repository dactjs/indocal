import type { InferSubjects } from "@casl/ability";

import type { Ticket } from "@indocal/schemas";

import type { AppAbilityAction } from "../../constants";

export type TicketAbilities = [
  (
    | typeof AppAbilityAction.CREATE
    | typeof AppAbilityAction.READ
    | typeof AppAbilityAction.UPDATE
    | typeof AppAbilityAction.DELETE
  ),
  InferSubjects<Ticket>,
];

////////////////
// Re-exports //
////////////////

export * from "./services";
export * from "./service-categories";
export * from "./comments";
export * from "./traces";

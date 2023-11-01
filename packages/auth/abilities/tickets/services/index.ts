import type { InferSubjects } from "@casl/ability";

import type { TicketService } from "@indocal/schemas";

import type { AppAbilityAction } from "../../../constants";

export type TicketServiceAbilities = [
  (
    | typeof AppAbilityAction.CREATE
    | typeof AppAbilityAction.READ
    | typeof AppAbilityAction.UPDATE
    | typeof AppAbilityAction.DELETE
  ),
  InferSubjects<TicketService>,
];

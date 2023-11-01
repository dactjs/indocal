import type { InferSubjects } from "@casl/ability";

import type { TicketComment } from "@indocal/schemas";

import type { AppAbilityAction } from "../../../constants";

export type TicketCommentAbilities = [
  (
    | typeof AppAbilityAction.CREATE
    | typeof AppAbilityAction.READ
    | typeof AppAbilityAction.UPDATE
    | typeof AppAbilityAction.DELETE
  ),
  InferSubjects<TicketComment>,
];

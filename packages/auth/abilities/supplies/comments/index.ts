import type { InferSubjects } from "@casl/ability";

import type { SupplyComment } from "@indocal/schemas";

import type { AppAbilityAction } from "../../../constants";

export type SupplyCommentAbilities = [
  (
    | typeof AppAbilityAction.CREATE
    | typeof AppAbilityAction.READ
    | typeof AppAbilityAction.UPDATE
    | typeof AppAbilityAction.DELETE
  ),
  InferSubjects<SupplyComment>,
];

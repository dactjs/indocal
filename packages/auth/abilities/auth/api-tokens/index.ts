import type { InferSubjects } from "@casl/ability";

import type { ApiToken } from "@indocal/schemas";

import type { AppAbilityAction } from "../../../constants";

export type ApiTokenAbilities = [
  (
    | typeof AppAbilityAction.CREATE
    | typeof AppAbilityAction.READ
    | typeof AppAbilityAction.UPDATE
    | typeof AppAbilityAction.DELETE
  ),
  InferSubjects<ApiToken>,
];

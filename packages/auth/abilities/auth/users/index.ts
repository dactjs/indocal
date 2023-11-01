import type { InferSubjects } from "@casl/ability";

import type { User } from "@indocal/schemas";

import type { AppAbilityAction } from "../../../constants";

export type UserAbilities = [
  (
    | typeof AppAbilityAction.CREATE
    | typeof AppAbilityAction.READ
    | typeof AppAbilityAction.UPDATE
    | typeof AppAbilityAction.DELETE
  ),
  InferSubjects<User>,
];

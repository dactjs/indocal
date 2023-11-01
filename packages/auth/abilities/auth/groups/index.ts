import type { InferSubjects } from "@casl/ability";

import type { UserGroup } from "@indocal/schemas";

import type { AppAbilityAction } from "../../../constants";

export type UserGroupAbilities = [
  (
    | typeof AppAbilityAction.CREATE
    | typeof AppAbilityAction.READ
    | typeof AppAbilityAction.UPDATE
    | typeof AppAbilityAction.DELETE
  ),
  InferSubjects<UserGroup>,
];

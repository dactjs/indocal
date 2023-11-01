import type { InferSubjects } from "@casl/ability";

import type { SupplyTrace } from "@indocal/schemas";

import type { AppAbilityAction } from "../../../constants";

export type SupplyTraceAbilities = [
  typeof AppAbilityAction.CREATE | typeof AppAbilityAction.READ,
  InferSubjects<SupplyTrace>,
];

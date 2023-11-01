import type { InferSubjects } from "@casl/ability";

import type { TicketTrace } from "@indocal/schemas";

import type { AppAbilityAction } from "../../../constants";

export type TicketTraceAbilities = [
  typeof AppAbilityAction.CREATE | typeof AppAbilityAction.READ,
  InferSubjects<TicketTrace>,
];

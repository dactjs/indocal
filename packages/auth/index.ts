import { AbilityBuilder, createMongoAbility } from "@casl/ability";

import type { Jwt } from "@indocal/schemas";

import {
  defineApiTokenRulesFor,
  defineUserRulesFor,
  defineUserGroupRulesFor,
  defineTicketRulesFor,
  defineTicketServiceRulesFor,
  defineTicketServiceCategoryRulesFor,
  defineTicketCommentRulesFor,
  defineTicketTraceRulesFor,
  defineSupplyRulesFor,
  defineSupplyCommentRulesFor,
  defineSupplyTraceRulesFor,
} from "./rules";
import type { AppAbility } from "./types";

export function defineAbilityFor(token: Jwt): AppAbility {
  const builder = new AbilityBuilder<AppAbility>(createMongoAbility);

  const definers = [
    defineApiTokenRulesFor,
    defineUserRulesFor,
    defineUserGroupRulesFor,
    defineTicketRulesFor,
    defineTicketServiceRulesFor,
    defineTicketServiceCategoryRulesFor,
    defineTicketCommentRulesFor,
    defineTicketTraceRulesFor,
    defineSupplyRulesFor,
    defineSupplyCommentRulesFor,
    defineSupplyTraceRulesFor,
  ];

  definers.forEach((definer) => {
    definer(token, builder);
  });

  const ability = builder.build();

  return ability;
}

////////////////
// Re-exports //
////////////////

export * from "./constants";
export * from "./types";

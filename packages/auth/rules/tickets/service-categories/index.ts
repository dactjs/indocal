import type { AbilityBuilder } from "@casl/ability";

import type { Jwt } from "@indocal/schemas";
import {
  JwtType,
  ApiTokenType,
  ApiTokenStatus,
  UserStatus,
  UserRole,
} from "@indocal/schemas";

import { AppAbilityAction } from "../../../constants";
import type { AppAbility } from "../../../types";

export function defineTicketServiceCategoryRulesFor(
  token: Jwt,
  builder: AbilityBuilder<AppAbility>
): void {
  switch (token.type) {
    case JwtType.API_TOKEN: {
      if (token.apiToken.status === ApiTokenStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "TicketServiceCategory");

      if (token.apiToken.type === ApiTokenType.SERVICE) {
        builder.can(AppAbilityAction.CREATE, "TicketServiceCategory");
        builder.can(AppAbilityAction.UPDATE, "TicketServiceCategory");
        builder.can(AppAbilityAction.DELETE, "TicketServiceCategory");
      }

      break;
    }

    case JwtType.USER: {
      if (token.user.status === UserStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "TicketServiceCategory");

      if (token.user.roles.includes(UserRole.STUDIO_USER)) {
        builder.can(AppAbilityAction.CREATE, "TicketServiceCategory");
        builder.can(AppAbilityAction.UPDATE, "TicketServiceCategory");
        builder.can(AppAbilityAction.DELETE, "TicketServiceCategory");
      }

      break;
    }
  }
}

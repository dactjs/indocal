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

export function defineTicketServiceRulesFor(
  token: Jwt,
  builder: AbilityBuilder<AppAbility>
): void {
  switch (token.type) {
    case JwtType.API_TOKEN: {
      if (token.apiToken.status === ApiTokenStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "TicketService");

      if (token.apiToken.type === ApiTokenType.SERVICE) {
        builder.can(AppAbilityAction.CREATE, "TicketService");
        builder.can(AppAbilityAction.UPDATE, "TicketService");
        builder.can(AppAbilityAction.DELETE, "TicketService");
      }

      break;
    }

    case JwtType.USER: {
      if (token.user.status === UserStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "TicketService");

      if (token.user.roles.includes(UserRole.STUDIO_USER)) {
        builder.can(AppAbilityAction.CREATE, "TicketService");
        builder.can(AppAbilityAction.UPDATE, "TicketService");
        builder.can(AppAbilityAction.DELETE, "TicketService");
      }

      break;
    }
  }
}

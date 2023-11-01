import type { AbilityBuilder } from "@casl/ability";

import type { Jwt } from "@indocal/schemas";
import {
  JwtType,
  ApiTokenType,
  ApiTokenStatus,
  UserStatus,
  UserRole,
} from "@indocal/schemas";

import { AppAbilityAction } from "../../constants";
import type { AppAbility } from "../../types";

export function defineSupplyRulesFor(
  token: Jwt,
  builder: AbilityBuilder<AppAbility>
): void {
  switch (token.type) {
    case JwtType.API_TOKEN: {
      if (token.apiToken.status === ApiTokenStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "Supply");

      if (token.apiToken.type === ApiTokenType.SERVICE) {
        builder.can(AppAbilityAction.CREATE, "Supply");
        builder.can(AppAbilityAction.UPDATE, "Supply");
        builder.can(AppAbilityAction.DELETE, "Supply");
      }

      break;
    }

    case JwtType.USER: {
      if (token.user.status === UserStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "Supply");

      const validRoles: UserRole[] = [
        UserRole.STUDIO_USER,
        UserRole.NOBU_ADMIN,
        UserRole.NOBU_USER,
      ];

      if (token.user.roles.some((role) => validRoles.includes(role))) {
        builder.can(AppAbilityAction.CREATE, "Supply");
        builder.can(AppAbilityAction.UPDATE, "Supply");
        builder.can(AppAbilityAction.DELETE, "Supply");
      }

      break;
    }
  }
}

////////////////
// Re-exports //
////////////////

export * from "./comments";
export * from "./traces";

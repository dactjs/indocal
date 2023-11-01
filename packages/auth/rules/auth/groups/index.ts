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

export function defineUserGroupRulesFor(
  token: Jwt,
  builder: AbilityBuilder<AppAbility>
): void {
  switch (token.type) {
    case JwtType.API_TOKEN: {
      if (token.apiToken.status === ApiTokenStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "UserGroup");

      if (token.apiToken.type === ApiTokenType.SERVICE) {
        builder.can(AppAbilityAction.CREATE, "UserGroup");
        builder.can(AppAbilityAction.UPDATE, "UserGroup");
        builder.can(AppAbilityAction.DELETE, "UserGroup");
      }

      break;
    }

    case JwtType.USER: {
      if (token.user.status === UserStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "UserGroup");

      if (token.user.roles.includes(UserRole.STUDIO_USER)) {
        builder.can(AppAbilityAction.CREATE, "UserGroup");
        builder.can(AppAbilityAction.UPDATE, "UserGroup");
        builder.can(AppAbilityAction.DELETE, "UserGroup");
      }

      break;
    }
  }
}

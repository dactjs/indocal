import type { AbilityBuilder } from "@casl/ability";

import type { Jwt } from "@indocal/schemas";
import {
  JwtType,
  ApiTokenStatus,
  UserStatus,
  UserRole,
} from "@indocal/schemas";

import { AppAbilityAction } from "../../../constants";
import type { AppAbility } from "../../../types";

export function defineApiTokenRulesFor(
  token: Jwt,
  builder: AbilityBuilder<AppAbility>
): void {
  switch (token.type) {
    case JwtType.API_TOKEN: {
      if (token.apiToken.status === ApiTokenStatus.DISABLED) return;

      builder.can(AppAbilityAction.READ, "ApiToken", {
        id: token.apiToken.id,
      });

      break;
    }

    case JwtType.USER: {
      if (token.user.status === UserStatus.DISABLED) return;

      if (token.user.roles.includes(UserRole.STUDIO_USER)) {
        builder.can(AppAbilityAction.CREATE, "ApiToken");
        builder.can(AppAbilityAction.READ, "ApiToken");
        builder.can(AppAbilityAction.UPDATE, "ApiToken");
        builder.can(AppAbilityAction.DELETE, "ApiToken");
      }

      break;
    }
  }
}

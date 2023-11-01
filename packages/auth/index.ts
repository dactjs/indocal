import { createMongoAbility } from "@casl/ability";

export function defineUserAbility() {
  return createMongoAbility();
}

export function defineApiTokenAbility() {
  return createMongoAbility();
}

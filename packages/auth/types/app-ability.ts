import type { MongoAbility } from "@casl/ability";

import type {
  ApiTokenAbilities,
  UserAbilities,
  UserGroupAbilities,
  TicketAbilities,
  TicketServiceAbilities,
  TicketServiceCategoryAbilities,
  TicketCommentAbilities,
  TicketTraceAbilities,
  SupplyAbilities,
  SupplyCommentAbilities,
  SupplyTraceAbilities,
} from "../abilities";

export type AppAbility = MongoAbility<
  | ApiTokenAbilities
  | UserAbilities
  | UserGroupAbilities
  | TicketAbilities
  | TicketServiceAbilities
  | TicketServiceCategoryAbilities
  | TicketCommentAbilities
  | TicketTraceAbilities
  | SupplyAbilities
  | SupplyCommentAbilities
  | SupplyTraceAbilities
>;

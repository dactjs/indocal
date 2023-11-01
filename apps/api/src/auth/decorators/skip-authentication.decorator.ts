import type { CustomDecorator } from "@nestjs/common";
import { SetMetadata } from "@nestjs/common";

export const SKIP_AUTHENTICATION_KEY = "skip_authentication";

export const SkipAuthentication = (): CustomDecorator<string> =>
  SetMetadata(SKIP_AUTHENTICATION_KEY, true);

export default SkipAuthentication;

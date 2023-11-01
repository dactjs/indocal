import { ForbiddenException } from "@nestjs/common";

export class DisabledApiTokenException extends ForbiddenException {
  constructor() {
    super("Disabled API Token");
  }
}

export default DisabledApiTokenException;

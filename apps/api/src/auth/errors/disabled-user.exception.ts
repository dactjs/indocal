import { ForbiddenException } from "@nestjs/common";

export class DisabledUserException extends ForbiddenException {
  constructor() {
    super("Disabled user");
  }
}

export default DisabledUserException;

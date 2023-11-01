import { UnauthorizedException } from "@nestjs/common";

export class InvalidUserCredentialsException extends UnauthorizedException {
  constructor() {
    super("Non-existent user or invalid credentials");
  }
}

export default InvalidUserCredentialsException;

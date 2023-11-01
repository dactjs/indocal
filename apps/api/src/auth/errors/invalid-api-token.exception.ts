import { UnauthorizedException } from "@nestjs/common";

export class InvalidApiTokenException extends UnauthorizedException {
  constructor() {
    super("Invalid or non-existent API Token");
  }
}

export default InvalidApiTokenException;

import { ConflictException } from "@nestjs/common";

export class UserAlreadyAssignedException extends ConflictException {
  constructor() {
    super("User already assigned to this supply");
  }
}

export default UserAlreadyAssignedException;

import { ConflictException } from "@nestjs/common";

export class UserAlreadyUnassignedException extends ConflictException {
  constructor() {
    super("User already unassigned from this supply");
  }
}

export default UserAlreadyUnassignedException;

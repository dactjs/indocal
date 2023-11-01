import { Reflector } from "@nestjs/core";
import type { ExecutionContext } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import type { Observable } from "rxjs";

import { SKIP_AUTHENTICATION_KEY } from "../../decorators";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const wasSkipAuthKeySetted = this.reflector.getAllAndOverride<boolean>(
      SKIP_AUTHENTICATION_KEY,
      [context.getHandler(), context.getClass()]
    );

    return wasSkipAuthKeySetted || super.canActivate(context);
  }
}

export default JwtAuthGuard;

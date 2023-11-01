import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PrismaService } from "nestjs-prisma";

import type { Jwt } from "@indocal/schemas";
import { JwtType, ApiTokenStatus, UserStatus } from "@indocal/schemas";

import { JWT_MODULE_OPTIONS } from "../../config";
import {
  InvalidApiTokenException,
  DisabledApiTokenException,
  InvalidUserCredentialsException,
  DisabledUserException,
} from "../../errors";

@Injectable()
export class JwtAuthStrategy extends PassportStrategy(Strategy) {
  constructor(private prismaService: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT_MODULE_OPTIONS.secret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Jwt): Promise<Jwt> {
    if (payload.type === JwtType.API_TOKEN) {
      const apiToken = await this.prismaService.apiToken.findUnique({
        where: { id: payload.apiToken.id },
      });

      if (!apiToken) throw new InvalidApiTokenException();

      if (apiToken.status === ApiTokenStatus.DISABLED)
        throw new DisabledApiTokenException();

      return {
        type: JwtType.API_TOKEN,
        apiToken: {
          id: apiToken.id,
          name: apiToken.name,
          description: apiToken.description,
          type: apiToken.type,
          status: apiToken.status,
        },
      };
    } else {
      const user = await this.prismaService.user.findUnique({
        where: { id: payload.user.id },
      });

      if (!user) throw new InvalidUserCredentialsException();

      if (user.status === UserStatus.DISABLED)
        throw new DisabledUserException();

      return {
        type: JwtType.USER,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          name: user.name,
          status: user.status,
          roles: user.roles,
        },
      };
    }
  }
}

export default JwtAuthStrategy;

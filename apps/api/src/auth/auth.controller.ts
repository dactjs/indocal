import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import {
  ApiTags,
  ApiBearerAuth,
  ApiBody,
  ApiCreatedResponse,
} from "@nestjs/swagger";
import { JwtService } from "@nestjs/jwt";
import { Request } from "express";

import type { UserJwt, AuthenticatedUser } from "@indocal/schemas";
import { Jwt, JwtType, Session } from "@indocal/schemas";

import { AuthenticatedRequest } from "~/types";

import { LocalAuthGuard } from "./strategies";
import { SkipAuthentication } from "./decorators";
import { JwtDto, SessionDto, SignInByCredentialsDto } from "./dto";

@ApiTags("Auth")
@Controller("auth")
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Post("local/sign-in")
  @SkipAuthentication()
  @UseGuards(LocalAuthGuard)
  @ApiBody({ type: SignInByCredentialsDto })
  @ApiCreatedResponse({ type: SessionDto })
  signIn(@Req() req: Request): Session {
    const payload = req.user as AuthenticatedUser;

    const jwt: UserJwt = {
      type: JwtType.USER,
      user: payload,
    };

    return {
      user: payload,
      access_token: this.jwtService.sign(jwt),
      issued_at: new Date().toISOString(),
    };
  }

  @Get("me")
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: JwtDto })
  me(@Req() req: AuthenticatedRequest): Jwt {
    return req.user;
  }
}

export default AuthController;

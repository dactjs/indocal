import { APP_GUARD } from "@nestjs/core";
import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { PrismaService } from "nestjs-prisma";

import { AuthController } from "./auth.controller";
import { JwtAuthGuard, LocalAuthStrategy, JwtAuthStrategy } from "./strategies";
import { JWT_MODULE_OPTIONS } from "./config";

import { ApiTokensModule, UsersModule, UserGroupsModule } from "./submodules";

@Module({
  imports: [
    ApiTokensModule,
    UsersModule,
    UserGroupsModule,
    PassportModule,
    JwtModule.register(JWT_MODULE_OPTIONS),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    LocalAuthStrategy,
    JwtAuthStrategy,
    PrismaService,
  ],
})
export class AuthModule {}

export default AuthModule;

import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

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
})
export class AuthModule {}

export default AuthModule;

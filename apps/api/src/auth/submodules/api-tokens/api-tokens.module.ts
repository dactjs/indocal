import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PrismaService } from "nestjs-prisma";

import { JWT_MODULE_OPTIONS } from "../../config";

import { ApiTokensController } from "./api-tokens.controller";
import { ApiTokensService } from "./api-tokens.service";

@Module({
  imports: [JwtModule.register(JWT_MODULE_OPTIONS)],
  controllers: [ApiTokensController],
  providers: [ApiTokensService, PrismaService],
})
export class ApiTokensModule {}

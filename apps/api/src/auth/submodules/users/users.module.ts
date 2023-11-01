import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}

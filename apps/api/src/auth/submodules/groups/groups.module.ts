import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { UserGroupsController } from "./groups.controller";
import { UserGroupsService } from "./groups.service";

@Module({
  controllers: [UserGroupsController],
  providers: [UserGroupsService, PrismaService],
})
export class UserGroupsModule {}

import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { SupplyCommentsService } from "./supply-comments.service";

@Module({
  providers: [SupplyCommentsService, PrismaService],
  exports: [SupplyCommentsService],
})
export class SupplyCommentsModule {}

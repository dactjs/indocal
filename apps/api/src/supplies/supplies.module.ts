import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { SuppliesController } from "./supplies.controller";
import { SuppliesService } from "./supplies.service";

import { SupplyCommentsModule, SupplyTracesModule } from "./submodules";

@Module({
  imports: [SupplyCommentsModule, SupplyTracesModule],
  controllers: [SuppliesController],
  providers: [SuppliesService, PrismaService],
})
export class SuppliesModule {}

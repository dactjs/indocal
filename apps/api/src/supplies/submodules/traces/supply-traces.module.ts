import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { SupplyTracesController } from "./supply-traces.controller";
import { SupplyTracesService } from "./supply-traces.service";

@Module({
  controllers: [SupplyTracesController],
  providers: [SupplyTracesService, PrismaService],
  exports: [SupplyTracesService],
})
export class SupplyTracesModule {}

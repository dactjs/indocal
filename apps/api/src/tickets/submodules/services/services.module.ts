import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { TicketServicesController } from "./services.controller";
import { TicketServicesService } from "./services.service";

@Module({
  controllers: [TicketServicesController],
  providers: [TicketServicesService, PrismaService],
  exports: [TicketServicesService],
})
export class TicketServicesModule {}

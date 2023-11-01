import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { TicketTracesController } from "./ticket-traces.controller";
import { TicketTracesService } from "./ticket-traces.service";

@Module({
  controllers: [TicketTracesController],
  providers: [TicketTracesService, PrismaService],
  exports: [TicketTracesService],
})
export class TicketTracesModule {}

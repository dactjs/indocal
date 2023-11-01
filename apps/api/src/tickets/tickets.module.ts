import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { TicketsController } from "./tickets.controller";
import { TicketsService } from "./tickets.service";

import {
  TicketServicesModule,
  TicketServiceCategoriesModule,
  TicketCommentsModule,
  TicketTracesModule,
} from "./submodules";

@Module({
  imports: [
    TicketServicesModule,
    TicketServiceCategoriesModule,
    TicketCommentsModule,
    TicketTracesModule,
  ],
  controllers: [TicketsController],
  providers: [TicketsService, PrismaService],
})
export class TicketsModule {}

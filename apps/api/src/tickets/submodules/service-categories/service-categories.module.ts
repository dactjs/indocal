import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { TicketServicesService } from "../services/services.service";

import { TicketServiceCategoriesController } from "./service-categories.controller";
import { TicketServiceCategoriesService } from "./service-categories.service";

@Module({
  controllers: [TicketServiceCategoriesController],
  providers: [
    TicketServiceCategoriesService,
    TicketServicesService,
    PrismaService,
  ],
  exports: [TicketServiceCategoriesService],
})
export class TicketServiceCategoriesModule {}

import { Module } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import { TicketCommentsService } from "./ticket-comments.service";

@Module({
  providers: [TicketCommentsService, PrismaService],
  exports: [TicketCommentsService],
})
export class TicketCommentsModule {}

import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiCreatedResponse } from "@nestjs/swagger";

import type { TicketTrace } from "@indocal/schemas";

import { TicketTracesService } from "./ticket-traces.service";
import { TicketTraceDto } from "./dto";

@ApiTags("Ticket Traces")
@ApiBearerAuth()
@Controller("ticket-traces")
export class TicketTracesController {
  constructor(private ticketTracesService: TicketTracesService) {}

  @Get()
  @ApiCreatedResponse({ type: TicketTraceDto, isArray: true })
  async findMany(): Promise<TicketTrace[]> {
    const traces = await this.ticketTracesService.findMany();

    return traces;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: TicketTraceDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<TicketTrace | null> {
    const trace = await this.ticketTracesService.findUnique({
      id,
    });

    return trace || null;
  }
}

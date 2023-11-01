import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiCreatedResponse } from "@nestjs/swagger";

import type { TicketService } from "@indocal/schemas";

import { TicketServicesService } from "./services.service";
import { TicketServiceDto } from "./dto";

@ApiTags("Ticket Services")
@ApiBearerAuth()
@Controller("ticket-services")
export class TicketServicesController {
  constructor(private ticketServicesService: TicketServicesService) {}

  @Get()
  @ApiCreatedResponse({ type: TicketServiceDto, isArray: true })
  async findMany(): Promise<TicketService[]> {
    const services = await this.ticketServicesService.findMany();

    return services;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: TicketServiceDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<TicketService | null> {
    const service = await this.ticketServicesService.findUnique({
      id,
    });

    return service || null;
  }
}

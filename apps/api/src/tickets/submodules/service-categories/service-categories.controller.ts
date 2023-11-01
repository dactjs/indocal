import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
} from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiCreatedResponse } from "@nestjs/swagger";

import type { TicketServiceCategory, TicketService } from "@indocal/schemas";

import { TicketServicesService } from "../services/services.service";
import { TicketServiceDto } from "../services/dto";

import { TicketServiceCategoriesService } from "./service-categories.service";
import {
  TicketServiceCategoryDto,
  CreateTicketServiceCategoryDto,
  UpdateTicketServiceCategoryDto,
  CreateTicketServiceDto,
  UpdateTicketServiceDto,
} from "./dto";

@ApiTags("Ticket Service Categories")
@ApiBearerAuth()
@Controller("ticket-service-categories")
export class TicketServiceCategoriesController {
  constructor(
    private ticketServiceCategoriesService: TicketServiceCategoriesService,
    private ticketServicesService: TicketServicesService
  ) {}

  @Post()
  @ApiCreatedResponse({ type: TicketServiceCategoryDto })
  async create(
    @Body() createTicketServiceCategoryDto: CreateTicketServiceCategoryDto
  ): Promise<TicketServiceCategory> {
    const category = await this.ticketServiceCategoriesService.create({
      name: createTicketServiceCategoryDto.name,
    });

    return category;
  }

  @Get()
  @ApiCreatedResponse({ type: TicketServiceCategoryDto, isArray: true })
  async findMany(): Promise<TicketServiceCategory[]> {
    const categories = await this.ticketServiceCategoriesService.findMany();

    return categories;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: TicketServiceCategoryDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<TicketServiceCategory | null> {
    const category = await this.ticketServiceCategoriesService.findUnique({
      id,
    });

    return category || null;
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: TicketServiceCategoryDto })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateTicketServiceCategoryDto: UpdateTicketServiceCategoryDto
  ): Promise<TicketServiceCategory> {
    const category = await this.ticketServiceCategoriesService.update(
      { id },
      { name: updateTicketServiceCategoryDto.name }
    );

    return category;
  }

  @Delete(":id")
  @ApiCreatedResponse({ type: TicketServiceCategoryDto })
  async delete(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<TicketServiceCategory> {
    const category = await this.ticketServiceCategoriesService.delete({ id });

    return category;
  }

  @Post(":id/services")
  @ApiCreatedResponse({ type: TicketServiceDto })
  async createTicketService(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() createTicketServiceDto: CreateTicketServiceDto
  ): Promise<TicketService> {
    const service = await this.ticketServicesService.create({
      data: { name: createTicketServiceDto.name },
      category: { id },
    });

    return service;
  }

  @Get(":id/services")
  @ApiCreatedResponse({ type: TicketServiceDto, isArray: true })
  async findAllServicesForTicketServiceCategory(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<TicketService[]> {
    const services =
      await this.ticketServicesService.findAllServicesForTicketServiceCategory({
        id,
      });

    return services;
  }

  @Get(":id/services/:serviceId")
  @ApiCreatedResponse({ type: TicketServiceDto })
  async findOneTicketServiceById(
    @Param("serviceId", ParseUUIDPipe) serviceId: string
  ): Promise<TicketService | null> {
    const service = await this.ticketServicesService.findUnique({
      id: serviceId,
    });

    return service || null;
  }

  @Patch(":id/services/:serviceId")
  @ApiCreatedResponse({ type: TicketServiceDto })
  async updateTicketService(
    @Param("serviceId", ParseUUIDPipe) serviceId: string,
    @Body() updateTicketServiceDto: UpdateTicketServiceDto
  ): Promise<TicketService> {
    const service = await this.ticketServicesService.update(
      { id: serviceId },
      { name: updateTicketServiceDto.name }
    );

    return service;
  }

  @Delete(":id/services/:serviceId")
  @ApiCreatedResponse({ type: TicketServiceDto })
  async deleteTicketService(
    @Param("serviceId", ParseUUIDPipe) serviceId: string
  ): Promise<TicketService> {
    const service = await this.ticketServicesService.delete({
      id: serviceId,
    });

    return service;
  }
}

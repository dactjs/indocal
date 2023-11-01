import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  TicketService,
  CreateTicketServiceData,
  UpdateTicketServiceData,
  FindUniqueTicketServiceQuery,
  FindUniqueTicketServiceCategoryQuery,
} from "@indocal/schemas";
import { TicketServiceSchema } from "@indocal/schemas";

@Injectable()
export class TicketServicesService {
  constructor(private prismaService: PrismaService) {}

  async create({
    data,
    category,
  }: {
    data: CreateTicketServiceData;
    category: FindUniqueTicketServiceCategoryQuery;
  }): Promise<TicketService> {
    const service = await this.prismaService.ticketService.create({
      data: {
        name: data.name,
        category: { connect: { id: category.id, name: category.name } },
      },
      include: { category: true },
    });

    return TicketServiceSchema.parse(service);
  }

  async findMany(): Promise<TicketService[]> {
    const categories = await this.prismaService.ticketService.findMany({
      include: { category: true },
    });

    return TicketServiceSchema.array().parse(categories);
  }

  async findUnique({
    id,
  }: FindUniqueTicketServiceQuery): Promise<TicketService | null> {
    const service = await this.prismaService.ticketService.findUnique({
      where: { id },
      include: { category: true },
    });

    return TicketServiceSchema.parse(service);
  }

  async findAllServicesForTicketServiceCategory({
    id,
    name,
  }: FindUniqueTicketServiceCategoryQuery): Promise<TicketService[]> {
    const services = await this.prismaService.ticketService.findMany({
      where: { category: { id, name } },
      include: { category: true },
    });

    return TicketServiceSchema.array().parse(services);
  }

  async update(
    { id }: FindUniqueTicketServiceQuery,
    data: UpdateTicketServiceData
  ): Promise<TicketService> {
    const service = await this.prismaService.ticketService.update({
      where: { id },
      data: { name: data.name },
      include: { category: true },
    });

    return TicketServiceSchema.parse(service);
  }

  async delete({ id }: FindUniqueTicketServiceQuery): Promise<TicketService> {
    const service = await this.prismaService.ticketService.delete({
      where: { id },
      include: { category: true },
    });

    return TicketServiceSchema.parse(service);
  }
}

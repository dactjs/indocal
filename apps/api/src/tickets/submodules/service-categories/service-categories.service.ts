import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  TicketServiceCategory,
  CreateTicketServiceCategoryData,
  UpdateTicketServiceCategoryData,
  FindUniqueTicketServiceCategoryQuery,
} from "@indocal/schemas";
import { TicketServiceCategorySchema } from "@indocal/schemas";

@Injectable()
export class TicketServiceCategoriesService {
  constructor(private prismaService: PrismaService) {}

  async create(
    data: CreateTicketServiceCategoryData
  ): Promise<TicketServiceCategory> {
    const category = await this.prismaService.ticketServiceCategory.create({
      data: { name: data.name },
    });

    return TicketServiceCategorySchema.parse(category);
  }

  async findMany(): Promise<TicketServiceCategory[]> {
    const categories =
      await this.prismaService.ticketServiceCategory.findMany();

    return TicketServiceCategorySchema.array().parse(categories);
  }

  async findUnique({
    id,
  }: FindUniqueTicketServiceCategoryQuery): Promise<TicketServiceCategory | null> {
    const category = await this.prismaService.ticketServiceCategory.findUnique({
      where: { id },
    });

    return TicketServiceCategorySchema.parse(category);
  }

  async update(
    { id }: FindUniqueTicketServiceCategoryQuery,
    data: UpdateTicketServiceCategoryData
  ): Promise<TicketServiceCategory> {
    const category = await this.prismaService.ticketServiceCategory.update({
      where: { id },
      data: { name: data.name },
    });

    return TicketServiceCategorySchema.parse(category);
  }

  async delete({
    id,
  }: FindUniqueTicketServiceCategoryQuery): Promise<TicketServiceCategory> {
    const category = await this.prismaService.ticketServiceCategory.delete({
      where: { id },
    });

    return TicketServiceCategorySchema.parse(category);
  }
}

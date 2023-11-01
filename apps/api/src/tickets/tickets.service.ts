import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  Ticket,
  CreateTicketData,
  UpdateTicketData,
  FindUniqueTicketQuery,
} from "@indocal/schemas";
import { TicketSchema } from "@indocal/schemas";

@Injectable()
export class TicketsService {
  constructor(private prismaService: PrismaService) {}

  async create({ data }: { data: CreateTicketData }): Promise<Ticket> {
    const ticket = await this.prismaService.ticket.create({
      data: {
        issue: data.issue,
        service: { connect: { id: data.service } },
        sentBy: { connect: { id: data.sentBy } },
      },
      include: { service: true, sentBy: true },
    });

    return TicketSchema.parse(ticket);
  }

  async findMany(): Promise<Ticket[]> {
    const tickets = await this.prismaService.ticket.findMany({
      include: { service: true, sentBy: true },
    });

    return TicketSchema.array().parse(tickets);
  }

  async findUnique({ id }: FindUniqueTicketQuery): Promise<Ticket | null> {
    const ticket = await this.prismaService.ticket.findUnique({
      where: { id },
      include: { service: true, sentBy: true },
    });

    return ticket ? TicketSchema.parse(ticket) : null;
  }

  async update(
    { id }: FindUniqueTicketQuery,
    data: UpdateTicketData
  ): Promise<Ticket> {
    const ticket = await this.prismaService.ticket.update({
      where: { id },
      data: { service: { connect: { id: data.service } } },
      include: { service: true, sentBy: true },
    });

    return TicketSchema.parse(ticket);
  }

  async delete({ id }: FindUniqueTicketQuery): Promise<Ticket> {
    const ticket = await this.prismaService.ticket.delete({
      where: { id },
      include: { service: true, sentBy: true },
    });

    return TicketSchema.parse(ticket);
  }
}

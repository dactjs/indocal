import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  TicketComment,
  CreateTicketCommentData,
  UpdateTicketCommentData,
  FindUniqueTicketCommentQuery,
  FindUniqueTicketQuery,
} from "@indocal/schemas";
import { TicketCommentSchema } from "@indocal/schemas";

@Injectable()
export class TicketCommentsService {
  constructor(private prismaService: PrismaService) {}

  async create({
    data,
    ticket,
  }: {
    data: CreateTicketCommentData;
    ticket: FindUniqueTicketQuery;
  }): Promise<TicketComment> {
    const comment = await this.prismaService.ticketComment.create({
      data: {
        content: data.content,
        ticket: { connect: { id: ticket.id } },
        writtenBy: { connect: { id: data.writtenBy } },
      },
      include: { ticket: true, writtenBy: true },
    });

    return TicketCommentSchema.parse(comment);
  }

  async findMany(): Promise<TicketComment[]> {
    const comments = await this.prismaService.ticketComment.findMany({
      include: { ticket: true, writtenBy: true },
    });

    return TicketCommentSchema.array().parse(comments);
  }

  async findUnique({
    id,
  }: FindUniqueTicketCommentQuery): Promise<TicketComment | null> {
    const comment = await this.prismaService.ticketComment.findUnique({
      where: { id },
      include: { ticket: true, writtenBy: true },
    });

    return TicketCommentSchema.parse(comment);
  }

  async findAllCommentsForTicket({
    id,
  }: FindUniqueTicketQuery): Promise<TicketComment[]> {
    const comments = await this.prismaService.ticketComment.findMany({
      where: { ticket: { id } },
      include: { ticket: true, writtenBy: true },
    });

    return TicketCommentSchema.array().parse(comments);
  }

  async update(
    { id }: FindUniqueTicketCommentQuery,
    data: UpdateTicketCommentData
  ): Promise<TicketComment> {
    const comment = await this.prismaService.ticketComment.update({
      where: { id },
      data: { content: data.content },
      include: { ticket: true, writtenBy: true },
    });

    return TicketCommentSchema.parse(comment);
  }

  async delete({ id }: FindUniqueTicketCommentQuery): Promise<TicketComment> {
    const comment = await this.prismaService.ticketComment.delete({
      where: { id },
      include: { ticket: true, writtenBy: true },
    });

    return TicketCommentSchema.parse(comment);
  }
}

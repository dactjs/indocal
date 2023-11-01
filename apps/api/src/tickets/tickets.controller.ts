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

import type {
  Ticket,
  TicketComment,
  TicketTrace,
  CreateReceptionTicketTraceData,
  CreateAssignmentTicketTraceData,
  CreateTransferTicketTraceData,
  CreateOpenedTicketTraceData,
  CreateResolvedTicketTraceData,
  CreateClosedTicketTraceData,
  CreateCancelledTicketTraceData,
} from "@indocal/schemas";
import { TicketTraceType } from "@indocal/schemas";

import { TicketsService } from "./tickets.service";
import {
  TicketDto,
  CreateTicketDto,
  UpdateTicketDto,
  CreateTicketCommentDto,
  UpdateTicketCommentDto,
  CreateTicketTraceDto,
} from "./dto";

import {
  TicketCommentsService,
  TicketTracesService,
  TicketCommentDto,
  TicketTraceDto,
} from "./submodules";

@ApiTags("Tickets")
@ApiBearerAuth()
@Controller("tickets")
export class TicketsController {
  constructor(
    private ticketsService: TicketsService,
    private ticketCommentsService: TicketCommentsService,
    private ticketTracesService: TicketTracesService
  ) {}

  @Post()
  @ApiCreatedResponse({ type: TicketDto })
  async create(@Body() createTicketDto: CreateTicketDto): Promise<Ticket> {
    const ticket = await this.ticketsService.create({
      data: {
        issue: createTicketDto.issue,
        service: createTicketDto.service,
        sentBy: createTicketDto.sentBy,
      },
    });

    return ticket;
  }

  @Get()
  @ApiCreatedResponse({ type: TicketDto, isArray: true })
  async findMany(): Promise<Ticket[]> {
    const tickets = await this.ticketsService.findMany();

    return tickets;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: TicketDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<Ticket | null> {
    const ticket = await this.ticketsService.findUnique({ id });

    return ticket || null;
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: TicketDto })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateTicketDto: UpdateTicketDto
  ): Promise<Ticket> {
    const ticket = await this.ticketsService.update(
      { id },
      { service: updateTicketDto.service }
    );

    return ticket;
  }

  @Delete(":id")
  @ApiCreatedResponse({ type: TicketDto })
  async delete(@Param("id", ParseUUIDPipe) id: string): Promise<Ticket> {
    const ticket = await this.ticketsService.delete({ id });

    return ticket;
  }

  @Post(":id/comments")
  @ApiCreatedResponse({ type: TicketCommentDto })
  async makeTicketComment(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() createTicketCommentDto: CreateTicketCommentDto
  ): Promise<TicketComment> {
    const comment = await this.ticketCommentsService.create({
      data: {
        content: createTicketCommentDto.content,
        writtenBy: createTicketCommentDto.writtenBy,
      },
      ticket: { id },
    });

    return comment;
  }

  @Get(":id/comments")
  @ApiCreatedResponse({ type: TicketCommentDto, isArray: true })
  async findAllCommentsForTicket(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<TicketComment[]> {
    const comments = await this.ticketCommentsService.findAllCommentsForTicket({
      id,
    });

    return comments;
  }

  @Get(":id/comments/:commentId")
  @ApiCreatedResponse({ type: TicketCommentDto })
  async findOneTicketCommentById(
    @Param("commentId", ParseUUIDPipe) commentId: string
  ): Promise<TicketComment | null> {
    const comment = await this.ticketCommentsService.findUnique({
      id: commentId,
    });

    return comment;
  }

  @Patch(":id/comments/:commentId")
  @ApiCreatedResponse({ type: TicketCommentDto })
  async updateTicketComment(
    @Param("commentId", ParseUUIDPipe) commentId: string,
    @Body() updateTicketCommentDto: UpdateTicketCommentDto
  ): Promise<TicketComment> {
    const comment = await this.ticketCommentsService.update(
      { id: commentId },
      { content: updateTicketCommentDto.content }
    );

    return comment;
  }

  @Delete(":id/comments/:commentId")
  @ApiCreatedResponse({ type: TicketCommentDto })
  async deleteTicketComment(
    @Param("commentId", ParseUUIDPipe) commentId: string
  ): Promise<TicketComment> {
    const comment = await this.ticketCommentsService.delete({ id: commentId });

    return comment;
  }

  @Post(":id/traces")
  @ApiCreatedResponse({ type: TicketTraceDto })
  async makeTicketTrace(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() createTicketTraceDto: CreateTicketTraceDto
  ): Promise<TicketTrace> {
    switch (createTicketTraceDto.type) {
      case TicketTraceType.RECEPTION: {
        const { type, madeBy } =
          createTicketTraceDto as CreateReceptionTicketTraceData;

        return await this.ticketTracesService.reception({
          data: { type, madeBy },
          ticket: { id },
        });
      }

      case TicketTraceType.ASSIGNMENT: {
        const { type, destination, madeBy } =
          createTicketTraceDto as CreateAssignmentTicketTraceData;

        return await this.ticketTracesService.assignment({
          data: { type, destination, madeBy },
          ticket: { id },
        });
      }

      case TicketTraceType.TRANSFER: {
        const { type, destination, madeBy } =
          createTicketTraceDto as CreateTransferTicketTraceData;

        return await this.ticketTracesService.transfer({
          data: { type, destination, madeBy },
          ticket: { id },
        });
      }

      case TicketTraceType.OPENED: {
        const { type, madeBy } =
          createTicketTraceDto as CreateOpenedTicketTraceData;

        return await this.ticketTracesService.opened({
          data: { type, madeBy },
          ticket: { id },
        });
      }

      case TicketTraceType.RESOLVED: {
        const { type, madeBy } =
          createTicketTraceDto as CreateResolvedTicketTraceData;

        return await this.ticketTracesService.resolved({
          data: { type, madeBy },
          ticket: { id },
        });
      }

      case TicketTraceType.CLOSED: {
        const { type, madeBy } =
          createTicketTraceDto as CreateClosedTicketTraceData;

        return await this.ticketTracesService.closed({
          data: { type, madeBy },
          ticket: { id },
        });
      }

      case TicketTraceType.CANCELLED: {
        const { type, madeBy } =
          createTicketTraceDto as CreateCancelledTicketTraceData;

        return await this.ticketTracesService.cancelled({
          data: { type, madeBy },
          ticket: { id },
        });
      }
    }
  }

  @Get(":id/traces")
  @ApiCreatedResponse({ type: TicketTraceDto, isArray: true })
  async findAllTracesForTicket(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<TicketTrace[]> {
    const traces = await this.ticketTracesService.findAllTracesForTicket({
      id,
    });

    return traces;
  }

  @Get(":id/traces/:traceId")
  @ApiCreatedResponse({ type: TicketTraceDto })
  async findOneTicketTraceById(
    @Param("traceId", ParseUUIDPipe) traceId: string
  ): Promise<TicketTrace | null> {
    const trace = await this.ticketTracesService.findUnique({
      id: traceId,
    });

    return trace;
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  TicketTrace,
  ReceptionTicketTrace,
  AssignmentTicketTrace,
  TransferTicketTrace,
  OpenedTicketTrace,
  ResolvedTicketTrace,
  ClosedTicketTrace,
  CancelledTicketTrace,
  CreateReceptionTicketTraceData,
  CreateAssignmentTicketTraceData,
  CreateTransferTicketTraceData,
  CreateOpenedTicketTraceData,
  CreateResolvedTicketTraceData,
  CreateClosedTicketTraceData,
  CreateCancelledTicketTraceData,
  FindUniqueTicketTraceQuery,
  FindUniqueTicketQuery,
} from "@indocal/schemas";
import {
  TicketTraceSchema,
  ReceptionTicketTraceSchema,
  AssignmentTicketTraceSchema,
  TransferTicketTraceSchema,
  OpenedTicketTraceSchema,
  ResolvedTicketTraceSchema,
  ClosedTicketTraceSchema,
  CancelledTicketTraceSchema,
} from "@indocal/schemas";

@Injectable()
export class TicketTracesService {
  constructor(private prismaService: PrismaService) {}

  async reception({
    data,
    ticket,
  }: {
    data: CreateReceptionTicketTraceData;
    ticket: FindUniqueTicketQuery;
  }): Promise<ReceptionTicketTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.ticket.findUniqueOrThrow({
        where: { id: ticket.id },
        include: { assignedTo: true },
      });

      const trace = await tx.ticketTrace.create({
        data: {
          type: data.type,
          ticket: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          ticket: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return ReceptionTicketTraceSchema.parse(trace);
  }

  async assignment({
    data,
    ticket,
  }: {
    data: CreateAssignmentTicketTraceData;
    ticket: FindUniqueTicketQuery;
  }): Promise<AssignmentTicketTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.ticket.findUniqueOrThrow({
        where: { id: ticket.id },
        include: { assignedTo: true },
      });

      const trace = await tx.ticketTrace.create({
        data: {
          type: data.type,
          ticket: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          ticket: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return AssignmentTicketTraceSchema.parse(trace);
  }

  async transfer({
    data,
    ticket,
  }: {
    data: CreateTransferTicketTraceData;
    ticket: FindUniqueTicketQuery;
  }): Promise<TransferTicketTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.ticket.findUniqueOrThrow({
        where: { id: ticket.id },
        include: { assignedTo: true },
      });

      const trace = await tx.ticketTrace.create({
        data: {
          type: data.type,
          ticket: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          ticket: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return TransferTicketTraceSchema.parse(trace);
  }

  async opened({
    data,
    ticket,
  }: {
    data: CreateOpenedTicketTraceData;
    ticket: FindUniqueTicketQuery;
  }): Promise<OpenedTicketTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.ticket.findUniqueOrThrow({
        where: { id: ticket.id },
        include: { assignedTo: true },
      });

      const trace = await tx.ticketTrace.create({
        data: {
          type: data.type,
          ticket: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          ticket: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return OpenedTicketTraceSchema.parse(trace);
  }

  async resolved({
    data,
    ticket,
  }: {
    data: CreateResolvedTicketTraceData;
    ticket: FindUniqueTicketQuery;
  }): Promise<ResolvedTicketTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.ticket.findUniqueOrThrow({
        where: { id: ticket.id },
        include: { assignedTo: true },
      });

      const trace = await tx.ticketTrace.create({
        data: {
          type: data.type,
          ticket: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          ticket: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return ResolvedTicketTraceSchema.parse(trace);
  }

  async closed({
    data,
    ticket,
  }: {
    data: CreateClosedTicketTraceData;
    ticket: FindUniqueTicketQuery;
  }): Promise<ClosedTicketTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.ticket.findUniqueOrThrow({
        where: { id: ticket.id },
        include: { assignedTo: true },
      });

      const trace = await tx.ticketTrace.create({
        data: {
          type: data.type,
          ticket: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          ticket: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return ClosedTicketTraceSchema.parse(trace);
  }

  async cancelled({
    data,
    ticket,
  }: {
    data: CreateCancelledTicketTraceData;
    ticket: FindUniqueTicketQuery;
  }): Promise<CancelledTicketTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.ticket.findUniqueOrThrow({
        where: { id: ticket.id },
        include: { assignedTo: true },
      });

      const trace = await tx.ticketTrace.create({
        data: {
          type: data.type,
          ticket: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          ticket: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return CancelledTicketTraceSchema.parse(trace);
  }

  async findMany(): Promise<TicketTrace[]> {
    const traces = await this.prismaService.ticketTrace.findMany({
      include: { ticket: true, origin: true, destination: true, madeBy: true },
    });

    return TicketTraceSchema.array().parse(traces);
  }

  async findUnique({
    id,
  }: FindUniqueTicketTraceQuery): Promise<TicketTrace | null> {
    const trace = await this.prismaService.ticketTrace.findUnique({
      where: { id },
      include: { ticket: true, origin: true, destination: true, madeBy: true },
    });

    return TicketTraceSchema.parse(trace);
  }

  async findAllTracesForTicket({
    id,
  }: FindUniqueTicketQuery): Promise<TicketTrace[]> {
    const traces = await this.prismaService.ticketTrace.findMany({
      where: { ticket: { id } },
      include: { ticket: true, origin: true, destination: true, madeBy: true },
    });

    return TicketTraceSchema.array().parse(traces);
  }
}

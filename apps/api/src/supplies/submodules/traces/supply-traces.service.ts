import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  SupplyTrace,
  InputSupplyTrace,
  AssignmentSupplyTrace,
  TransferSupplyTrace,
  UnassignmentSupplyTrace,
  RepairSupplyTrace,
  OutputSupplyTrace,
  CreateInputSupplyTraceData,
  CreateAssignmentSupplyTraceData,
  CreateTransferSupplyTraceData,
  CreateUnassignmentSupplyTraceData,
  CreateRepairSupplyTraceData,
  CreateOutputSupplyTraceData,
  FindUniqueSupplyTraceQuery,
  FindUniqueSupplyQuery,
} from "@indocal/schemas";
import {
  SupplyTraceSchema,
  InputSupplyTraceSchema,
  AssignmentSupplyTraceSchema,
  TransferSupplyTraceSchema,
  UnassignmentSupplyTraceSchema,
  RepairSupplyTraceSchema,
  OutputSupplyTraceSchema,
} from "@indocal/schemas";

import {
  UserAlreadyAssignedException,
  UserAlreadyUnassignedException,
} from "./errors";

@Injectable()
export class SupplyTracesService {
  constructor(private prismaService: PrismaService) {}

  async input({
    data,
    supply,
  }: {
    data: CreateInputSupplyTraceData;
    supply: FindUniqueSupplyQuery;
  }): Promise<InputSupplyTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.supply.findUniqueOrThrow({
        where: { id: supply.id, serial: supply.serial },
        include: { assignedTo: true },
      });

      const trace = await tx.supplyTrace.create({
        data: {
          type: data.type,
          supply: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          supply: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return InputSupplyTraceSchema.parse(trace);
  }

  async assignment({
    data,
    supply,
  }: {
    data: CreateAssignmentSupplyTraceData;
    supply: FindUniqueSupplyQuery;
  }): Promise<AssignmentSupplyTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.supply.findUniqueOrThrow({
        where: { id: supply.id, serial: supply.serial },
        include: { assignedTo: true },
      });

      if (target.assignedTo) throw new UserAlreadyAssignedException();

      const trace = await tx.supplyTrace.create({
        data: {
          type: data.type,
          supply: { connect: { id: target.id } },
          destination: { connect: { id: data.destination } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          supply: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      await tx.supply.update({
        where: { id: target.id },
        data: { assignedTo: { connect: { id: data.destination } } },
      });

      return trace;
    });

    return AssignmentSupplyTraceSchema.parse(trace);
  }

  async transfer({
    data,
    supply,
  }: {
    data: CreateTransferSupplyTraceData;
    supply: FindUniqueSupplyQuery;
  }): Promise<TransferSupplyTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.supply.findUniqueOrThrow({
        where: { id: supply.id, serial: supply.serial },
        include: { assignedTo: true },
      });

      if (!target.assignedTo) throw new UserAlreadyUnassignedException();

      const trace = await tx.supplyTrace.create({
        data: {
          type: data.type,
          supply: { connect: { id: target.id } },
          origin: { connect: { id: target.assignedTo.id } },
          destination: { connect: { id: data.destination } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          supply: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      await tx.supply.update({
        where: { id: target.id },
        data: { assignedTo: { connect: { id: data.destination } } },
      });

      return trace;
    });

    return TransferSupplyTraceSchema.parse(trace);
  }

  async unassignment({
    data,
    supply,
  }: {
    data: CreateUnassignmentSupplyTraceData;
    supply: FindUniqueSupplyQuery;
  }): Promise<UnassignmentSupplyTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.supply.findUniqueOrThrow({
        where: { id: supply.id, serial: supply.serial },
        include: { assignedTo: true },
      });

      if (!target.assignedTo) throw new UserAlreadyUnassignedException();

      const trace = await tx.supplyTrace.create({
        data: {
          type: data.type,
          supply: { connect: { id: target.id } },
          origin: { connect: { id: target.assignedTo.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          supply: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      await tx.supply.update({
        where: { id: target.id },
        data: { assignedTo: { disconnect: true } },
      });

      return trace;
    });

    return UnassignmentSupplyTraceSchema.parse(trace);
  }

  async repair({
    data,
    supply,
  }: {
    data: CreateRepairSupplyTraceData;
    supply: FindUniqueSupplyQuery;
  }): Promise<RepairSupplyTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.supply.findUniqueOrThrow({
        where: { id: supply.id, serial: supply.serial },
        include: { assignedTo: true },
      });

      const trace = await tx.supplyTrace.create({
        data: {
          type: data.type,
          supply: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          supply: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return RepairSupplyTraceSchema.parse(trace);
  }

  async output({
    data,
    supply,
  }: {
    data: CreateOutputSupplyTraceData;
    supply: FindUniqueSupplyQuery;
  }): Promise<OutputSupplyTrace> {
    const trace = await this.prismaService.$transaction(async (tx) => {
      const target = await tx.supply.findUniqueOrThrow({
        where: { id: supply.id, serial: supply.serial },
        include: { assignedTo: true },
      });

      if (target.assignedTo) throw new UserAlreadyAssignedException();

      const trace = await tx.supplyTrace.create({
        data: {
          type: data.type,
          supply: { connect: { id: target.id } },
          madeBy: { connect: { id: data.madeBy } },
        },
        include: {
          supply: true,
          origin: true,
          destination: true,
          madeBy: true,
        },
      });

      return trace;
    });

    return OutputSupplyTraceSchema.parse(trace);
  }

  async findMany(): Promise<SupplyTrace[]> {
    const traces = await this.prismaService.supplyTrace.findMany({
      include: { supply: true, origin: true, destination: true, madeBy: true },
    });

    return SupplyTraceSchema.array().parse(traces);
  }

  async findUnique({
    id,
  }: FindUniqueSupplyTraceQuery): Promise<SupplyTrace | null> {
    const trace = await this.prismaService.supplyTrace.findUnique({
      where: { id },
      include: { supply: true, origin: true, destination: true, madeBy: true },
    });

    return SupplyTraceSchema.parse(trace);
  }

  async findAllTracesForSupply({
    id,
    serial,
  }: FindUniqueSupplyQuery): Promise<SupplyTrace[]> {
    const traces = await this.prismaService.supplyTrace.findMany({
      where: { supply: { id, serial } },
      include: { supply: true, origin: true, destination: true, madeBy: true },
    });

    return SupplyTraceSchema.array().parse(traces);
  }
}

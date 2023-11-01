import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  Supply,
  CreateSupplyData,
  UpdateSupplyData,
  FindUniqueSupplyQuery,
} from "@indocal/schemas";
import { SupplySchema, SupplyTraceType } from "@indocal/schemas";

@Injectable()
export class SuppliesService {
  constructor(private prismaService: PrismaService) {}

  async create({ data }: { data: CreateSupplyData }): Promise<Supply> {
    const supply = await this.prismaService.supply.create({
      data: {
        brand: data.brand,
        model: data.model,
        serial: data.serial,
        traces: {
          create: {
            type: SupplyTraceType.INPUT,
            madeBy: { connect: { id: data.createdBy } },
          },
        },
      },
      include: { assignedTo: true },
    });

    return SupplySchema.parse(supply);
  }

  async findMany(): Promise<Supply[]> {
    const supplies = await this.prismaService.supply.findMany({
      include: { assignedTo: true },
    });

    return SupplySchema.array().parse(supplies);
  }

  async findUnique({
    id,
    serial,
  }: FindUniqueSupplyQuery): Promise<Supply | null> {
    const supply = await this.prismaService.supply.findUnique({
      where: { id, serial },
      include: { assignedTo: true },
    });

    return supply ? SupplySchema.parse(supply) : null;
  }

  async update(
    { id, serial }: FindUniqueSupplyQuery,
    data: UpdateSupplyData
  ): Promise<Supply> {
    const supply = await this.prismaService.supply.update({
      where: { id, serial },
      data: {
        brand: data.brand,
        model: data.model,
        serial: data.serial,
      },
      include: { assignedTo: true },
    });

    return SupplySchema.parse(supply);
  }

  async delete({ id, serial }: FindUniqueSupplyQuery): Promise<Supply> {
    const supply = await this.prismaService.supply.delete({
      where: { id, serial },
      include: { assignedTo: true },
    });

    return SupplySchema.parse(supply);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  SupplyComment,
  CreateSupplyCommentData,
  UpdateSupplyCommentData,
  FindUniqueSupplyCommentQuery,
  FindUniqueSupplyQuery,
} from "@indocal/schemas";
import { SupplyCommentSchema } from "@indocal/schemas";

@Injectable()
export class SupplyCommentsService {
  constructor(private prismaService: PrismaService) {}

  async create({
    data,
    supply,
  }: {
    data: CreateSupplyCommentData;
    supply: FindUniqueSupplyQuery;
  }): Promise<SupplyComment> {
    const comment = await this.prismaService.supplyComment.create({
      data: {
        content: data.content,
        supply: { connect: { id: supply.id, serial: supply.serial } },
        writtenBy: { connect: { id: data.writtenBy } },
      },
      include: { supply: true, writtenBy: true },
    });

    return SupplyCommentSchema.parse(comment);
  }

  async findMany(): Promise<SupplyComment[]> {
    const comments = await this.prismaService.supplyComment.findMany({
      include: { supply: true, writtenBy: true },
    });

    return SupplyCommentSchema.array().parse(comments);
  }

  async findUnique({
    id,
  }: FindUniqueSupplyCommentQuery): Promise<SupplyComment | null> {
    const comment = await this.prismaService.supplyComment.findUnique({
      where: { id },
      include: { supply: true, writtenBy: true },
    });

    return SupplyCommentSchema.parse(comment);
  }

  async findAllCommentsForSupply({
    id,
    serial,
  }: FindUniqueSupplyQuery): Promise<SupplyComment[]> {
    const comments = await this.prismaService.supplyComment.findMany({
      where: { supply: { id, serial } },
      include: { supply: true, writtenBy: true },
    });

    return SupplyCommentSchema.array().parse(comments);
  }

  async update(
    { id }: FindUniqueSupplyCommentQuery,
    data: UpdateSupplyCommentData
  ): Promise<SupplyComment> {
    const comment = await this.prismaService.supplyComment.update({
      where: { id },
      data: { content: data.content },
      include: { supply: true, writtenBy: true },
    });

    return SupplyCommentSchema.parse(comment);
  }

  async delete({ id }: FindUniqueSupplyCommentQuery): Promise<SupplyComment> {
    const comment = await this.prismaService.supplyComment.delete({
      where: { id },
      include: { supply: true, writtenBy: true },
    });

    return SupplyCommentSchema.parse(comment);
  }
}

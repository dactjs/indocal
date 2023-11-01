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
  Supply,
  SupplyComment,
  SupplyTrace,
  CreateInputSupplyTraceData,
  CreateAssignmentSupplyTraceData,
  CreateTransferSupplyTraceData,
  CreateUnassignmentSupplyTraceData,
  CreateRepairSupplyTraceData,
  CreateOutputSupplyTraceData,
} from "@indocal/schemas";
import { SupplyTraceType } from "@indocal/schemas";

import { SuppliesService } from "./supplies.service";
import {
  SupplyDto,
  CreateSupplyDto,
  UpdateSupplyDto,
  CreateSupplyCommentDto,
  UpdateSupplyCommentDto,
  CreateSupplyTraceDto,
} from "./dto";

import {
  SupplyCommentsService,
  SupplyTracesService,
  SupplyCommentDto,
  SupplyTraceDto,
} from "./submodules";

@ApiTags("Supplies")
@ApiBearerAuth()
@Controller("supplies")
export class SuppliesController {
  constructor(
    private suppliesService: SuppliesService,
    private supplyCommentsService: SupplyCommentsService,
    private supplyTracesService: SupplyTracesService
  ) {}

  @Post()
  @ApiCreatedResponse({ type: SupplyDto })
  async create(@Body() createSupplyDto: CreateSupplyDto): Promise<Supply> {
    const supply = await this.suppliesService.create({
      data: {
        brand: createSupplyDto.brand,
        model: createSupplyDto.model,
        serial: createSupplyDto.serial,
        createdBy: createSupplyDto.createdBy,
      },
    });

    return supply;
  }

  @Get()
  @ApiCreatedResponse({ type: SupplyDto, isArray: true })
  async findMany(): Promise<Supply[]> {
    const supplies = await this.suppliesService.findMany();

    return supplies;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: SupplyDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<Supply | null> {
    const supply = await this.suppliesService.findUnique({ id });

    return supply || null;
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: SupplyDto })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateSupplyDto: UpdateSupplyDto
  ): Promise<Supply> {
    const supply = await this.suppliesService.update(
      { id },
      {
        brand: updateSupplyDto.brand,
        model: updateSupplyDto.model,
        serial: updateSupplyDto.serial,
      }
    );

    return supply;
  }

  @Delete(":id")
  @ApiCreatedResponse({ type: SupplyDto })
  async delete(@Param("id", ParseUUIDPipe) id: string): Promise<Supply> {
    const supply = await this.suppliesService.delete({ id });

    return supply;
  }

  @Post(":id/comments")
  @ApiCreatedResponse({ type: SupplyCommentDto })
  async makeSupplyComment(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() createSupplyCommentDto: CreateSupplyCommentDto
  ): Promise<SupplyComment> {
    const comment = await this.supplyCommentsService.create({
      data: {
        content: createSupplyCommentDto.content,
        writtenBy: createSupplyCommentDto.writtenBy,
      },
      supply: { id },
    });

    return comment;
  }

  @Get(":id/comments")
  @ApiCreatedResponse({ type: SupplyCommentDto, isArray: true })
  async findAllCommentsForSupply(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<SupplyComment[]> {
    const comments = await this.supplyCommentsService.findAllCommentsForSupply({
      id,
    });

    return comments;
  }

  @Get(":id/comments/:commentId")
  @ApiCreatedResponse({ type: SupplyCommentDto })
  async findOneSupplyCommentById(
    @Param("commentId", ParseUUIDPipe) commentId: string
  ): Promise<SupplyComment | null> {
    const comment = await this.supplyCommentsService.findUnique({
      id: commentId,
    });

    return comment;
  }

  @Patch(":id/comments/:commentId")
  @ApiCreatedResponse({ type: SupplyCommentDto })
  async updateSupplyComment(
    @Param("commentId", ParseUUIDPipe) commentId: string,
    @Body() updateSupplyCommentDto: UpdateSupplyCommentDto
  ): Promise<SupplyComment> {
    const comment = await this.supplyCommentsService.update(
      { id: commentId },
      { content: updateSupplyCommentDto.content }
    );

    return comment;
  }

  @Delete(":id/comments/:commentId")
  @ApiCreatedResponse({ type: SupplyCommentDto })
  async deleteSupplyComment(
    @Param("commentId", ParseUUIDPipe) commentId: string
  ): Promise<SupplyComment> {
    const comment = await this.supplyCommentsService.delete({ id: commentId });

    return comment;
  }

  @Post(":id/traces")
  @ApiCreatedResponse({ type: SupplyTraceDto })
  async makeSupplyTrace(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() createSupplyTraceDto: CreateSupplyTraceDto
  ): Promise<SupplyTrace> {
    switch (createSupplyTraceDto.type) {
      case SupplyTraceType.INPUT: {
        const { type, madeBy } =
          createSupplyTraceDto as CreateInputSupplyTraceData;

        return await this.supplyTracesService.input({
          data: { type, madeBy },
          supply: { id },
        });
      }

      case SupplyTraceType.ASSIGNMENT: {
        const { type, destination, madeBy } =
          createSupplyTraceDto as CreateAssignmentSupplyTraceData;

        return await this.supplyTracesService.assignment({
          data: { type, destination, madeBy },
          supply: { id },
        });
      }

      case SupplyTraceType.TRANSFER: {
        const { type, destination, madeBy } =
          createSupplyTraceDto as CreateTransferSupplyTraceData;

        return await this.supplyTracesService.transfer({
          data: { type, destination, madeBy },
          supply: { id },
        });
      }

      case SupplyTraceType.UNASSIGNMENT: {
        const { type, madeBy } =
          createSupplyTraceDto as CreateUnassignmentSupplyTraceData;

        return await this.supplyTracesService.unassignment({
          data: { type, madeBy },
          supply: { id },
        });
      }

      case SupplyTraceType.REPAIR: {
        const { type, madeBy } =
          createSupplyTraceDto as CreateRepairSupplyTraceData;

        return await this.supplyTracesService.repair({
          data: { type, madeBy },
          supply: { id },
        });
      }

      case SupplyTraceType.OUTPUT: {
        const { type, madeBy } =
          createSupplyTraceDto as CreateOutputSupplyTraceData;

        return await this.supplyTracesService.output({
          data: { type, madeBy },
          supply: { id },
        });
      }
    }
  }

  @Get(":id/traces")
  @ApiCreatedResponse({ type: SupplyTraceDto, isArray: true })
  async findAllTracesForSupply(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<SupplyTrace[]> {
    const traces = await this.supplyTracesService.findAllTracesForSupply({
      id,
    });

    return traces;
  }

  @Get(":id/traces/:traceId")
  @ApiCreatedResponse({ type: SupplyTraceDto })
  async findOneSupplyTraceById(
    @Param("traceId", ParseUUIDPipe) traceId: string
  ): Promise<SupplyTrace | null> {
    const trace = await this.supplyTracesService.findUnique({
      id: traceId,
    });

    return trace;
  }
}

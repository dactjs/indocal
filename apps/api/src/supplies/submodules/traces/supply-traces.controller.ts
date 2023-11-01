import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiCreatedResponse } from "@nestjs/swagger";

import type { SupplyTrace } from "@indocal/schemas";

import { SupplyTracesService } from "./supply-traces.service";
import { SupplyTraceDto } from "./dto";

@ApiTags("Supply Traces")
@ApiBearerAuth()
@Controller("supply-traces")
export class SupplyTracesController {
  constructor(private supplyTracesService: SupplyTracesService) {}

  @Get()
  @ApiCreatedResponse({ type: SupplyTraceDto, isArray: true })
  async findMany(): Promise<SupplyTrace[]> {
    const traces = await this.supplyTracesService.findMany();

    return traces;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: SupplyTraceDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<SupplyTrace | null> {
    const trace = await this.supplyTracesService.findUnique({
      id,
    });

    return trace || null;
  }
}

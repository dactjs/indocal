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
import { ApiTags, ApiCreatedResponse } from "@nestjs/swagger";

import type { ApiToken } from "@indocal/schemas";

import { ApiTokensService } from "./api-tokens.service";
import { ApiTokenDto, CreateApiTokenDto, UpdateApiTokenDto } from "./dto";

@ApiTags("Api Tokens")
@Controller("api-tokens")
export class ApiTokensController {
  constructor(private apiTokensService: ApiTokensService) {}

  @Post()
  @ApiCreatedResponse({ type: ApiTokenDto })
  async create(
    @Body() createApiTokenDto: CreateApiTokenDto
  ): Promise<ApiTokenDto> {
    const token = await this.apiTokensService.create({
      name: createApiTokenDto.name,
      description: createApiTokenDto.description,
      type: createApiTokenDto.type,
    });

    return token;
  }

  @Get()
  @ApiCreatedResponse({ type: ApiTokenDto, isArray: true })
  async findMany(): Promise<ApiToken[]> {
    const tokens = await this.apiTokensService.findMany();

    return tokens;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: ApiTokenDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<ApiToken | null> {
    const token = await this.apiTokensService.findUnique({ id });

    return token || null;
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: ApiTokenDto })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateApiTokenDto: UpdateApiTokenDto
  ): Promise<ApiToken> {
    const token = await this.apiTokensService.update(
      { id },
      {
        name: updateApiTokenDto.name,
        description: updateApiTokenDto.description,
        status: updateApiTokenDto.status,
      }
    );

    return token;
  }

  @Delete(":id")
  @ApiCreatedResponse({ type: ApiTokenDto })
  async delete(@Param("id", ParseUUIDPipe) id: string): Promise<ApiToken> {
    const token = await this.apiTokensService.delete({ id });

    return token;
  }
}

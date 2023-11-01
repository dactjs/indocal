import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "nestjs-prisma";
import { randomUUID } from "crypto";

import type {
  ApiToken,
  CreateApiTokenData,
  UpdateApiTokenData,
  FindUniqueApiTokenQuery,
  ApiTokenJwt,
} from "@indocal/schemas";
import { ApiTokenSchema, JwtType, ApiTokenStatus } from "@indocal/schemas";

@Injectable()
export class ApiTokensService {
  constructor(
    private jwtService: JwtService,
    private prismaService: PrismaService
  ) {}

  async create(data: CreateApiTokenData): Promise<ApiToken> {
    const uuid = randomUUID();

    const jwt: ApiTokenJwt = {
      type: JwtType.API_TOKEN,
      apiToken: {
        id: uuid,
        name: data.name,
        description: data.description,
        type: data.type,
        status: ApiTokenStatus.ENABLED,
      },
    };

    const token = await this.prismaService.apiToken.create({
      data: {
        id: uuid,
        name: data.name,
        description: data.description,
        type: data.type,
        token: this.jwtService.sign(jwt),
      },
    });

    return ApiTokenSchema.parse(token);
  }

  async findMany(): Promise<ApiToken[]> {
    const tokens = await this.prismaService.apiToken.findMany();

    return ApiTokenSchema.array().parse(tokens);
  }

  async findUnique({
    id,
    name,
  }: FindUniqueApiTokenQuery): Promise<ApiToken | null> {
    const token = await this.prismaService.apiToken.findUnique({
      where: { id, name },
    });

    return token ? ApiTokenSchema.parse(token) : null;
  }

  async update(
    { id, name }: FindUniqueApiTokenQuery,
    data: UpdateApiTokenData
  ): Promise<ApiToken> {
    const token = await this.prismaService.apiToken.update({
      where: { id, name },
      data: {
        name: data.name,
        description: data.description,
        status: data.status,
      },
    });

    return ApiTokenSchema.parse(token);
  }

  async delete({ id, name }: FindUniqueApiTokenQuery): Promise<ApiToken> {
    const token = await this.prismaService.apiToken.delete({
      where: { id, name },
    });

    return ApiTokenSchema.parse(token);
  }
}

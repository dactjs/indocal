import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "nestjs-prisma";
import { randomUUID } from "crypto";

import type {
  ApiToken,
  CreateApiTokenData,
  UpdateApiTokenData,
  FindOneApiTokenQuery,
  ApiTokenJwt,
} from "@indocal/schemas";
import { ApiTokenSchema, JwtType } from "@indocal/schemas";

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
    description,
  }: FindOneApiTokenQuery): Promise<ApiToken | null> {
    const token = await this.prismaService.apiToken.findUnique({
      where: { id, name, description },
    });

    return token ? ApiTokenSchema.parse(token) : null;
  }

  async findFirst({
    id,
    name,
    description,
  }: FindOneApiTokenQuery): Promise<ApiToken | null> {
    const token = await this.prismaService.apiToken.findFirst({
      where: { id, name, description },
    });

    return token ? ApiTokenSchema.parse(token) : null;
  }

  async update(
    { id, name, description }: FindOneApiTokenQuery,
    data: UpdateApiTokenData
  ): Promise<ApiToken> {
    const token = await this.prismaService.apiToken.update({
      where: { id, name, description },
      data: {
        name: data.name,
        description: data.description,
        status: data.status,
      },
    });

    return ApiTokenSchema.parse(token);
  }

  async delete({
    id,
    name,
    description,
  }: FindOneApiTokenQuery): Promise<ApiToken> {
    const token = await this.prismaService.apiToken.delete({
      where: { id, name, description },
    });

    return ApiTokenSchema.parse(token);
  }
}

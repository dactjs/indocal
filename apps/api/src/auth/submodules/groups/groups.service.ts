import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  UserGroup,
  CreateUserGroupData,
  UpdateUserGroupData,
  FindOneUserGroupQuery,
} from "@indocal/schemas";
import { UserGroupSchema } from "@indocal/schemas";

@Injectable()
export class UserGroupsService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateUserGroupData): Promise<UserGroup> {
    const group = await this.prismaService.userGroup.create({
      data: {
        name: data.name,
        description: data.description,
        members: { connect: data.members.map((id) => ({ id })) },
      },
      include: { members: { orderBy: { name: "asc" } } },
    });

    return UserGroupSchema.parse(group);
  }

  async findMany(): Promise<UserGroup[]> {
    const groups = await this.prismaService.userGroup.findMany({
      include: { members: { orderBy: { name: "asc" } } },
    });

    return UserGroupSchema.array().parse(groups);
  }

  async findUnique({
    id,
    name,
    description,
  }: FindOneUserGroupQuery): Promise<UserGroup | null> {
    const group = await this.prismaService.userGroup.findUnique({
      where: { id, name, description },
      include: { members: { orderBy: { name: "asc" } } },
    });

    return group ? UserGroupSchema.parse(group) : null;
  }

  async findFirst({
    id,
    name,
    description,
  }: FindOneUserGroupQuery): Promise<UserGroup | null> {
    const group = await this.prismaService.userGroup.findFirst({
      where: { id, name, description },
      include: { members: { orderBy: { name: "asc" } } },
    });

    return group ? UserGroupSchema.parse(group) : null;
  }

  async update(
    { id, name, description }: FindOneUserGroupQuery,
    data: UpdateUserGroupData
  ): Promise<UserGroup> {
    const group = await this.prismaService.userGroup.update({
      where: { id, name, description },
      data: {
        name: data.name,
        description: data.description,

        ...(data.members && {
          members: { set: data.members.map((id) => ({ id })) },
        }),
      },
      include: { members: { orderBy: { name: "asc" } } },
    });

    return UserGroupSchema.parse(group);
  }

  async delete({
    id,
    name,
    description,
  }: FindOneUserGroupQuery): Promise<UserGroup> {
    const group = await this.prismaService.userGroup.delete({
      where: { id, name, description },
      include: { members: { orderBy: { name: "asc" } } },
    });

    return UserGroupSchema.parse(group);
  }
}

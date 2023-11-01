import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";

import type {
  UserGroup,
  User,
  CreateUserGroupData,
  UpdateUserGroupData,
  AddMembersToUserGroupData,
  SetMembersToUserGroupData,
  RemoveMembersToUserGroupData,
  FindUniqueUserGroupQuery,
} from "@indocal/schemas";
import { UserGroupSchema, UserSchema } from "@indocal/schemas";

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
    });

    return UserGroupSchema.parse(group);
  }

  async findMany(): Promise<UserGroup[]> {
    const groups = await this.prismaService.userGroup.findMany();

    return UserGroupSchema.array().parse(groups);
  }

  async findUnique({
    id,
    name,
  }: FindUniqueUserGroupQuery): Promise<UserGroup | null> {
    const group = await this.prismaService.userGroup.findUnique({
      where: { id, name },
    });

    return group ? UserGroupSchema.parse(group) : null;
  }

  async update(
    { id, name }: FindUniqueUserGroupQuery,
    data: UpdateUserGroupData
  ): Promise<UserGroup> {
    const group = await this.prismaService.userGroup.update({
      where: { id, name },
      data: {
        name: data.name,
        description: data.description,
      },
    });

    return UserGroupSchema.parse(group);
  }

  async delete({ id, name }: FindUniqueUserGroupQuery): Promise<UserGroup> {
    const group = await this.prismaService.userGroup.delete({
      where: { id, name },
    });

    return UserGroupSchema.parse(group);
  }

  async addMembersToUserGroup({
    data,
    group,
  }: {
    data: AddMembersToUserGroupData;
    group: FindUniqueUserGroupQuery;
  }): Promise<User[]> {
    const { members } = await this.prismaService.userGroup.update({
      where: { id: group.id, name: group.name },
      data: {
        members: {
          connect: data.members.map((member) => ({
            id: member,
          })),
        },
      },
      include: { members: true },
    });

    return UserSchema.array().parse(members);
  }

  async findAllMembersForUserGroup({
    id,
    name,
  }: FindUniqueUserGroupQuery): Promise<User[]> {
    const members = await this.prismaService.user.findMany({
      where: { groups: { some: { id, name } } },
    });

    return UserSchema.array().parse(members);
  }

  async setMembersToUserGroup({
    data,
    group,
  }: {
    data: SetMembersToUserGroupData;
    group: FindUniqueUserGroupQuery;
  }): Promise<User[]> {
    const { members } = await this.prismaService.userGroup.update({
      where: { id: group.id, name: group.name },
      data: {
        members: {
          set: data.members.map((member) => ({
            id: member,
          })),
        },
      },
      include: { members: true },
    });

    return UserSchema.array().parse(members);
  }

  async removeMembersToUserGroup({
    data,
    group,
  }: {
    data: RemoveMembersToUserGroupData;
    group: FindUniqueUserGroupQuery;
  }): Promise<User[]> {
    const { members } = await this.prismaService.userGroup.update({
      where: { id: group.id, name: group.name },
      data: {
        members: {
          disconnect: data.members.map((member) => ({
            id: member,
          })),
        },
      },
      include: { members: true },
    });

    return UserSchema.array().parse(members);
  }
}

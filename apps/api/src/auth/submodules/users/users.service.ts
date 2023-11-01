import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import * as bcrypt from "bcrypt";

import type {
  User,
  UserGroup,
  CreateUserData,
  UpdateUserData,
  AddUserGroupsToUserData,
  SetUserGroupsToUserData,
  RemoveUserGroupsToUserData,
  FindUniqueUserQuery,
} from "@indocal/schemas";
import { UserSchema, UserGroupSchema } from "@indocal/schemas";

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(data: CreateUserData): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(data.password, salt);

    const user = await this.prismaService.user.create({
      data: {
        username: data.username,
        email: data.email,
        name: data.name,
        password: hash,
        roles: data.roles,
      },
    });

    return UserSchema.parse(user);
  }

  async findMany(): Promise<User[]> {
    const users = await this.prismaService.user.findMany();

    return UserSchema.array().parse(users);
  }

  async findUnique({
    id,
    username,
    email,
  }: FindUniqueUserQuery): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { id, username, email },
    });

    return user ? UserSchema.parse(user) : null;
  }

  async update(
    { id, username, email }: FindUniqueUserQuery,
    data: UpdateUserData
  ): Promise<User> {
    const user = await this.prismaService.user.update({
      where: { id, username, email },
      data: {
        username: data.username,
        email: data.email,
        name: data.name,
        status: data.status,
        roles: data.roles,
      },
    });

    return UserSchema.parse(user);
  }

  async delete({ id, username, email }: FindUniqueUserQuery): Promise<User> {
    const user = await this.prismaService.user.delete({
      where: { id, username, email },
    });

    return UserSchema.parse(user);
  }

  async addUserGroupsToUser({
    data,
    user,
  }: {
    data: AddUserGroupsToUserData;
    user: FindUniqueUserQuery;
  }): Promise<UserGroup[]> {
    const { groups } = await this.prismaService.user.update({
      where: { id: user.id, email: user.email, username: user.username },
      data: {
        groups: {
          connect: data.groups.map((group) => ({
            id: group,
          })),
        },
      },
      include: { groups: true },
    });

    return UserGroupSchema.array().parse(groups);
  }

  async findAllUserGroupsForUser({
    id,
    email,
    username,
  }: FindUniqueUserQuery): Promise<UserGroup[]> {
    const groups = await this.prismaService.userGroup.findMany({
      where: { members: { some: { id, email, username } } },
    });

    return UserGroupSchema.array().parse(groups);
  }

  async setUserGroupsToUser({
    data,
    user,
  }: {
    data: SetUserGroupsToUserData;
    user: FindUniqueUserQuery;
  }): Promise<UserGroup[]> {
    const { groups } = await this.prismaService.user.update({
      where: { id: user.id, email: user.email, username: user.username },
      data: {
        groups: {
          set: data.groups.map((group) => ({
            id: group,
          })),
        },
      },
      include: { groups: true },
    });

    return UserGroupSchema.array().parse(groups);
  }

  async removeUserGroupsToUser({
    data,
    user,
  }: {
    data: RemoveUserGroupsToUserData;
    user: FindUniqueUserQuery;
  }): Promise<UserGroup[]> {
    const { groups } = await this.prismaService.user.update({
      where: { id: user.id, email: user.email, username: user.username },
      data: {
        groups: {
          disconnect: data.groups.map((group) => ({
            id: group,
          })),
        },
      },
      include: { groups: true },
    });

    return UserGroupSchema.array().parse(groups);
  }
}

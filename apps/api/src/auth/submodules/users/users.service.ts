import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import * as bcrypt from "bcrypt";

import type {
  User,
  CreateUserData,
  UpdateUserData,
  FindOneUserQuery,
} from "@indocal/schemas";
import { UserSchema } from "@indocal/schemas";

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
      include: { groups: { orderBy: { name: "asc" } } },
    });

    return UserSchema.parse(user);
  }

  async findMany(): Promise<User[]> {
    const users = await this.prismaService.user.findMany({
      include: { groups: { orderBy: { name: "asc" } } },
    });

    return UserSchema.array().parse(users);
  }

  async findUnique({
    id,
    username,
    email,
  }: FindOneUserQuery): Promise<User | null> {
    const user = await this.prismaService.user.findUnique({
      where: { id, username, email },
      include: { groups: { orderBy: { name: "asc" } } },
    });

    return user ? UserSchema.parse(user) : null;
  }

  async findFirst({
    id,
    username,
    email,
  }: FindOneUserQuery): Promise<User | null> {
    const user = await this.prismaService.user.findFirst({
      where: { id, username, email },
      include: { groups: { orderBy: { name: "asc" } } },
    });

    return user ? UserSchema.parse(user) : null;
  }

  async update(
    { id, username, email }: FindOneUserQuery,
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
      include: { groups: { orderBy: { name: "asc" } } },
    });

    return UserSchema.parse(user);
  }

  async delete({ id, username, email }: FindOneUserQuery): Promise<User> {
    const user = await this.prismaService.user.delete({
      where: { id, username, email },
      include: { groups: { orderBy: { name: "asc" } } },
    });

    return UserSchema.parse(user);
  }
}

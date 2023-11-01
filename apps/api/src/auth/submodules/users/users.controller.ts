import {
  Controller,
  Post,
  Get,
  Put,
  Patch,
  Delete,
  Param,
  Body,
  ParseUUIDPipe,
} from "@nestjs/common";
import { ApiTags, ApiBearerAuth, ApiCreatedResponse } from "@nestjs/swagger";

import type { User, UserGroup } from "@indocal/schemas";

import { UserGroupDto } from "../groups";

import { UsersService } from "./users.service";
import {
  UserDto,
  CreateUserDto,
  UpdateUserDto,
  AddUserGroupsToUserDto,
  SetUserGroupsToUserDto,
  RemoveUserGroupsToUserDto,
} from "./dto";

@ApiTags("Users")
@ApiBearerAuth()
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserDto })
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const user = await this.usersService.create({
      username: createUserDto.username,
      email: createUserDto.email,
      name: createUserDto.name,
      password: createUserDto.password,
      roles: createUserDto.roles,
    });

    return user;
  }

  @Get()
  @ApiCreatedResponse({ type: UserDto, isArray: true })
  async findMany(): Promise<User[]> {
    const users = await this.usersService.findMany();

    return users;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: UserDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<User | null> {
    const user = await this.usersService.findUnique({ id });

    return user || null;
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: UserDto })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    const user = await this.usersService.update(
      { id },
      {
        username: updateUserDto.username,
        email: updateUserDto.email,
        name: updateUserDto.name,
        status: updateUserDto.status,
        roles: updateUserDto.roles,
      }
    );

    return user;
  }

  @Delete(":id")
  @ApiCreatedResponse({ type: UserDto })
  async delete(@Param("id", ParseUUIDPipe) id: string): Promise<User> {
    const user = await this.usersService.delete({ id });

    return user;
  }

  @Post(":id/groups")
  @ApiCreatedResponse({ type: UserGroupDto, isArray: true })
  async addUserGroupsToUser(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() addUserGroupsToUserDto: AddUserGroupsToUserDto
  ): Promise<UserGroup[]> {
    const groups = await this.usersService.addUserGroupsToUser({
      data: { groups: addUserGroupsToUserDto.groups },
      user: { id },
    });

    return groups;
  }

  @Get(":id/groups")
  @ApiCreatedResponse({ type: UserGroupDto, isArray: true })
  async findAllUserGroupsForUser(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<UserGroup[]> {
    const groups = await this.usersService.findAllUserGroupsForUser({
      id,
    });

    return groups;
  }

  @Put(":id/groups")
  @ApiCreatedResponse({ type: UserGroupDto, isArray: true })
  async setUserGroupsToUser(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() setUserGroupsToUserDto: SetUserGroupsToUserDto
  ): Promise<UserGroup[]> {
    const groups = await this.usersService.setUserGroupsToUser({
      data: { groups: setUserGroupsToUserDto.groups },
      user: { id },
    });

    return groups;
  }

  @Delete(":id/groups")
  @ApiCreatedResponse({ type: UserGroupDto, isArray: true })
  async removeUserGroupsToUser(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() removeUserGroupsToUserDto: RemoveUserGroupsToUserDto
  ): Promise<UserGroup[]> {
    const groups = await this.usersService.removeUserGroupsToUser({
      data: { groups: removeUserGroupsToUserDto.groups },
      user: { id },
    });

    return groups;
  }
}

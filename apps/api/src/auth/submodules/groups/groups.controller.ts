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

import type { UserGroup, User } from "@indocal/schemas";

import { UserDto } from "../users";

import { UserGroupsService } from "./groups.service";
import {
  UserGroupDto,
  CreateUserGroupDto,
  UpdateUserGroupDto,
  AddMembersToUserGroupDto,
  SetMembersToUserGroupDto,
  RemoveMembersToUserGroupDto,
} from "./dto";

@ApiTags("User Groups")
@ApiBearerAuth()
@Controller("groups")
export class UserGroupsController {
  constructor(private userGroupsService: UserGroupsService) {}

  @Post()
  @ApiCreatedResponse({ type: UserGroupDto })
  async create(
    @Body() createUserGroupDto: CreateUserGroupDto
  ): Promise<UserGroup> {
    const group = await this.userGroupsService.create({
      name: createUserGroupDto.name,
      description: createUserGroupDto.description,
      members: createUserGroupDto.members,
    });

    return group;
  }

  @Get()
  @ApiCreatedResponse({ type: UserGroupDto, isArray: true })
  async findMany(): Promise<UserGroup[]> {
    const groups = await this.userGroupsService.findMany();

    return groups;
  }

  @Get(":id")
  @ApiCreatedResponse({ type: UserGroupDto })
  async findOneById(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<UserGroup | null> {
    const group = await this.userGroupsService.findUnique({ id });

    return group || null;
  }

  @Patch(":id")
  @ApiCreatedResponse({ type: UserGroupDto })
  async update(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() updateUserGroupDto: UpdateUserGroupDto
  ): Promise<UserGroup> {
    const group = await this.userGroupsService.update(
      { id },
      {
        name: updateUserGroupDto.name,
        description: updateUserGroupDto.description,
      }
    );

    return group;
  }

  @Delete(":id")
  @ApiCreatedResponse({ type: UserGroupDto })
  async delete(@Param("id", ParseUUIDPipe) id: string): Promise<UserGroup> {
    const group = await this.userGroupsService.delete({ id });

    return group;
  }

  @Post(":id/members")
  @ApiCreatedResponse({ type: UserDto, isArray: true })
  async addMembersToUserGroup(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() addMembersToUserGroupDto: AddMembersToUserGroupDto
  ): Promise<User[]> {
    const members = await this.userGroupsService.addMembersToUserGroup({
      data: { members: addMembersToUserGroupDto.members },
      group: { id },
    });

    return members;
  }

  @Get(":id/members")
  @ApiCreatedResponse({ type: UserDto, isArray: true })
  async findAllMembersForUserGroup(
    @Param("id", ParseUUIDPipe) id: string
  ): Promise<User[]> {
    const members = await this.userGroupsService.findAllMembersForUserGroup({
      id,
    });

    return members;
  }

  @Put(":id/members")
  @ApiCreatedResponse({ type: UserDto, isArray: true })
  async setMembersToUserGroup(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() setMembersToUserGroupDto: SetMembersToUserGroupDto
  ): Promise<User[]> {
    const members = await this.userGroupsService.setMembersToUserGroup({
      data: { members: setMembersToUserGroupDto.members },
      group: { id },
    });

    return members;
  }

  @Delete(":id/members")
  @ApiCreatedResponse({ type: UserDto, isArray: true })
  async removeMembersToUserGroup(
    @Param("id", ParseUUIDPipe) id: string,
    @Body() removeMembersToUserGroupDto: RemoveMembersToUserGroupDto
  ): Promise<User[]> {
    const members = await this.userGroupsService.removeMembersToUserGroup({
      data: { members: removeMembersToUserGroupDto.members },
      group: { id },
    });

    return members;
  }
}

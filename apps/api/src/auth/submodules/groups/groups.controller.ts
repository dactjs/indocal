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

import type { UserGroup } from "@indocal/schemas";

import { UserGroupsService } from "./groups.service";
import { UserGroupDto, CreateUserGroupDto, UpdateUserGroupDto } from "./dto";

@ApiTags("User Groups")
@Controller("groups")
export class UserGroupsController {
  constructor(private userGroupsService: UserGroupsService) {}

  @Post()
  @ApiCreatedResponse({ type: UserGroupDto })
  async create(
    @Body() createUserGroupDto: CreateUserGroupDto
  ): Promise<UserGroupDto> {
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
        members: updateUserGroupDto.members,
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
}

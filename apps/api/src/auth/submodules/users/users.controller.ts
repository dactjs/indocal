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

import type { User } from "@indocal/schemas";

import { UsersService } from "./users.service";
import { UserDto, CreateUserDto, UpdateUserDto } from "./dto";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiCreatedResponse({ type: UserDto })
  async create(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
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
}

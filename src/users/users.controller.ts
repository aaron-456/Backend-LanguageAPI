import { Controller, Get, Post, Patch, Body } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dtos/createUser.dto';
import {} from '../users/users.service';
import { User } from './users.entity';

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  createUserController(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.createUserService(createUserDto);
  }
}

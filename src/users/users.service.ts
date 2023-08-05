import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/users.entity';
import { CreateUserDto } from '../users/dtos/createUser.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUserService(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password } = createUserDto;
    const user = this.userRepository.create({
      username,
      email,
      password,
      // status: UserStatus.ACTIVE,
    });
    return this.userRepository.save(user);
  }
}

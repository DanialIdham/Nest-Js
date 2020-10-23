import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersEntity } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
  @InjectRepository(UsersEntity)
    private userRepository: Repository<UsersEntity>,
  ) {}
  async getAllUsers(): Promise<UsersEntity[]> {
    return await this.userRepository.find();
  }
  async createUser(userEntity: UsersEntity) {
    this.userRepository.save(userEntity);
  }
}

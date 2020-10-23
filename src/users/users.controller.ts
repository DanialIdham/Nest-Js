import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,  
  UseGuards,
  Response
} from '@nestjs/common';
import { Response as Res } from 'express';
import { UsersService} from './users.service'
import { UsersEntity} from './users.entity'
const bcrypt = require('bcrypt');
import { Cron } from '@nestjs/schedule';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    @Get('/get-all')
    get() {
        return this.userService.getAllUsers();
    }
    @Post('/create-user')
    async create(@Body() userEntity: UsersEntity) {
        const saltRounds = 10;
        userEntity.password = bcrypt.hashSync(userEntity.password, saltRounds);
        return this.userService.createUser(userEntity);
    }
}

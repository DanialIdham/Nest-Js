import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
const axios = require('axios');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 @Post()
  create(): string {
    axios.post('https://abcbjwhduhwud.com', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log("Sucess")
  })
  .catch(function (error) {
    console.log("Failed")
  });
    return 'This action adds a new cat';
  }
}

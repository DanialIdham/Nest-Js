import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Response,
} from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { NotificationsService } from './notifications.service';
import axios from 'axios';
const _ = require('lodash');

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}
  @Get('/get-all')
  async get() {
    return await this.notificationsService.getAllNotifications();
  }
  @Get('/failed')
  async getFailed() {
    return this.notificationsService.getAllFailedNotification();
  }
  @Cron('*/1 * * * * *')
  async sendNotification() {
    let data = await this.notificationsService.cronNotificationForEvery10Seconds();
    let notPassed = [];
    let passed = [];
    for (let i = 0; i < data.length; i++) {
      await axios
        .post(data[i].url, {
          headers: {
              'Content-Type': 'application/json',
              'X-CMC_PRO_API_KEY': 'Xendit'
          },
          textNotification: data[i].notificationText,
        })
        .then(function(response) {
          passed.push(data[i]);
        })
        .catch(function(error) {
          notPassed.push(data[i]);
        });
    }
    for (let i = 0; i < passed.length; i++) {
      passed[i].sent = 1;
      console.log(passed[i]);
      return await this.notificationsService.updateNotification(passed[i]);
    }
    for (let i = 0; i < notPassed.length; i++) {
      notPassed[i].count += 1;
      return await this.notificationsService.updateNotification(notPassed[i]);
    }
  }
  @Cron('*/2 * * * * *')
  async sendNotification2() {
    let data = await this.notificationsService.cronNotificationForEvery20Seconds();
    let notPassed = [];
    let passed = [];
    for (let i = 0; i < data.length; i++) {
      await axios
        .post(data[i].url, {
           headers: {
              'Content-Type': 'application/json',
              'X-CMC_PRO_API_KEY': 'Xendit'
          },
          textNotification: data[i].notificationText,
        })
        .then(function(response) {
          passed.push(data[i]);
        })
        .catch(function(error) {
          notPassed.push(data[i]);
        });
    }
    for (let i = 0; i < passed.length; i++) {
      passed[i].sent = 1;
      console.log(passed[i]);
      return await this.notificationsService.updateNotification(passed[i]);
    }
    for (let i = 0; i < notPassed.length; i++) {
      notPassed[i].count += 1;
      return await this.notificationsService.updateNotification(notPassed[i]);
    }
  }
}

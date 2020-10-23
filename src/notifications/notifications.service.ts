import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, LessThanOrEqual, MoreThan } from 'typeorm';
import { NotificationsEntity } from './notifications.entity';
import { Cron } from '@nestjs/schedule';
import axios from 'axios';

const _ = require('lodash');
@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(NotificationsEntity)
    private notificationsRepository: Repository<NotificationsEntity>,
  ) {}
  async getAllNotifications(): Promise<NotificationsEntity[]> {
    return await this.notificationsRepository.find({});
  }
  async getAllFailedNotification(): Promise<NotificationsEntity[]> {
    return await this.notificationsRepository.find({
      where: [{ sent: 0 }],
    });
  }
  async createNotification(notificationEntity: NotificationsEntity) {
    return await this.notificationsRepository.save(notificationEntity);
  }
  async updateNotification(notificationEntity: NotificationsEntity) {
    return await this.notificationsRepository.save(notificationEntity);
  }
  async cronNotificationForEvery10Seconds() {
    let data = await this.notificationsRepository.find({
      where: {
        count: LessThanOrEqual(3),
        sent: 0,
      },
    });
    return data;
  }

  async cronNotificationForEvery20Seconds() {
    let data = await this.notificationsRepository.find({
      where: {
        count: LessThanOrEqual(10),
        sent: 0,
      },
    });
    return data;
  }
  async updateNotificationStatus(id: number, url: string) {
    console.log(id, url);
    return;
  }
}

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
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionEntity } from './transaction.entity';
import { NotificationsService } from '../notifications/notifications.service';
import { NotificationsEntity } from '../notifications/notifications.entity';
import { CompanyProfileService } from '../company-profile/company-profile.service';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly notificationsService: NotificationsService,
    private readonly companyProfileService: CompanyProfileService,
  ) {}
  @Get('/get-all')
  getAll() {
    return this.transactionService.getAllTransaction();
  }
  @Post('create')
  @HttpCode(200)
  async create(@Body() transactionEntity: TransactionEntity) {
    const data = await this.transactionService.createTransactionEntity(
      transactionEntity,
    );
    console.log(transactionEntity);
    let CompanyProfile = await this.companyProfileService.getCompanyProfileById(
      transactionEntity.company_profile_id,
    );
    if (!CompanyProfile || !CompanyProfile.url) {
      throw new HttpException(
        'Company profile does not have an URL yet',
        HttpStatus.NOT_FOUND,
      );
    } else {
      let notificationEntity = new NotificationsEntity();
      notificationEntity.status = 'New';
      notificationEntity.notificationText = transactionEntity.notificationText;
      notificationEntity.url = CompanyProfile.url;
      notificationEntity.sent = 0;
      notificationEntity.count = 0;
      notificationEntity.transaction_id = data.id;
      let NotificationData = await this.notificationsService.createNotification(
        notificationEntity,
      );
    }
    return {
      statusCode: 200,
      data: data,
    };
  }
}

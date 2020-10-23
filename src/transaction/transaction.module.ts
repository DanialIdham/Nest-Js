import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TransactionEntity} from './transaction.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsEntity } from '../notifications/notifications.entity';
import { NotificationsService } from '../notifications/notifications.service';
import { NotificationsModule} from '../notifications/notifications.module';
import { CompanyProfileService } from '../company-profile/company-profile.service';
import { CompanyProfileModule} from '../company-profile/company-profile.module';
import { CompanyProfileEntity } from '../company-profile/company-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TransactionEntity,NotificationsEntity,CompanyProfileEntity]),NotificationsModule,CompanyProfileModule],
  providers: [TransactionService,NotificationsService,CompanyProfileService],
  controllers: [TransactionController],
})
export class TransactionModule {}

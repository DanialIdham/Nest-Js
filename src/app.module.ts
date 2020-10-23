import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyProfileController } from './company-profile/company-profile.controller';
import { CompanyProfileService } from './company-profile/company-profile.service';
import { CompanyProfileModule } from './company-profile/company-profile.module';
import { TransactionService } from './transaction/transaction.service';
import { TransactionController } from './transaction/transaction.controller';
import { TransactionModule } from './transaction/transaction.module';
import { NotificationsService } from './notifications/notifications.service';
import { NotificationsController } from './notifications/notifications.controller';
import { NotificationsModule } from './notifications/notifications.module';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConfig } from './config/database.config';
import { config } from './config/config';
import { UsersService } from './users/users.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    UsersModule,
    CompanyProfileModule,
    TransactionModule,
    NotificationsModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      expandVariables: true,
      ignoreEnvFile: true,
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyProfileEntity } from './company-profile.entity';
import { CompanyProfileService} from './company-profile.service';
import { CompanyProfileController} from './company-profile.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CompanyProfileEntity])],
  providers: [CompanyProfileService],
  controllers: [CompanyProfileController],
  exports: [CompanyProfileService]
})
export class CompanyProfileModule {

}

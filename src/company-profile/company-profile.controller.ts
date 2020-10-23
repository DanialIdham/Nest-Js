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
  HttpStatus,
  HttpException,
  Query,
} from '@nestjs/common';
import { CompanyProfileService } from './company-profile.service';
import { CompanyProfileEntity } from './company-profile.entity';
import { PaginationDto } from './Pagination.dto';
import { PaginatedCompanyProfileResult } from './PaginatedCompanyProfileResult.dto';
import axios from 'axios';

@Controller('company-profile')
export class CompanyProfileController {
  constructor(private readonly companyProfileService: CompanyProfileService) {}
  @Get('all')
  getAll(
    @Query() paginationDto: PaginationDto,
  ): Promise<PaginatedCompanyProfileResult> {
    paginationDto.page = Number(paginationDto.page);
    paginationDto.limit = Number(paginationDto.limit);
    return this.companyProfileService.getAll({
      ...paginationDto,
      limit: paginationDto.limit > 10 ? 10 : paginationDto.limit,
    });
  }
  @Get(':id')
  async getById(@Param() params) {
    return await this.companyProfileService.getCompanyProfileById(params.id);
  }
  @Post('testNotification')
  async testNotification(@Body() body: any) {
    if (!body.id) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }
    if (!body.testData) {
      throw new HttpException('test data not found', HttpStatus.NOT_FOUND);
    }
    if (!body.url) {
      throw new HttpException('Url Not found', HttpStatus.NOT_FOUND);
    }
    let response = await axios
        .post(body.url, {
          headers: {
              'Content-Type': 'application/json',
              'X-CMC_PRO_API_KEY': 'Xendit'
          },
          testData: body.testData,
        })
        .then(function(response) {
             return {
              headers: {
                  'Content-Type': 'application/json',
                  'X-CMC_PRO_API_KEY': 'Xendit'
              },
              testData: body.testData,
              status: "Your Notification Is Succesfully Send",
            };
        })
        .catch(function(error) {
            throw new HttpException('Notification Failed, It might be the url', HttpStatus.NOT_FOUND);
        });
    return response
  }
  @Get('transactions')
  getCompanyProfileWithTransaction(
    @Query() paginationDto: PaginationDto,
  ): Promise<PaginatedCompanyProfileResult> {
    paginationDto.page = Number(paginationDto.page);
    paginationDto.limit = Number(paginationDto.limit);
    return this.companyProfileService.getCompanyProfileWithTransaction({
      ...paginationDto,
      limit: paginationDto.limit > 10 ? 10 : paginationDto.limit,
    });
  }
  @Post('create')
  async create(@Body() companyProfileEntity: CompanyProfileEntity) {
    return this.companyProfileService.createCompanyProfile(companyProfileEntity);
  }
  
  @Put('update-url')
  async updateUrl(@Body() body: any) {
    if (!body.id) {
      throw new HttpException('Id not found', HttpStatus.NOT_FOUND);
    }
    if (!body.url) {
      throw new HttpException('Url not found', HttpStatus.NOT_FOUND);
    }
    return this.companyProfileService.updateCompanyUrl(body.id, body.url);
  }
}

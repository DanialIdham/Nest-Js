import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CompanyProfileEntity } from './company-profile.entity';
import { TransactionEntity } from '../transaction/transaction.entity';
import { PaginationDto } from './Pagination.dto';
import { PaginatedCompanyProfileResult } from './PaginatedCompanyProfileResult.dto';

@Injectable()
export class CompanyProfileService {
  constructor(
    @InjectRepository(CompanyProfileEntity)
    private companyProfileRepository: Repository<CompanyProfileEntity>,
  ) {}
  async getAll(
    paginationDto: PaginationDto,
  ): Promise<PaginatedCompanyProfileResult> {
    const skippedItems = (paginationDto.page - 1) * paginationDto.limit;
    const totalCount = await this.companyProfileRepository.count();
    const companyProfiles = await this.companyProfileRepository
      .createQueryBuilder()
      .orderBy('id', 'DESC')
      .offset(skippedItems)
      .limit(paginationDto.limit)
      .getMany();
    return {
      totalCount,
      page: paginationDto.page,
      limit: paginationDto.limit,
      data: companyProfiles,
    };
  }
  async getCompanyProfileById(_id: number): Promise<CompanyProfileEntity> {
    return await this.companyProfileRepository.findOne(_id);
  }
  async getCompanyProfileWithTransaction(
    paginationDto: PaginationDto,
  ): Promise<PaginatedCompanyProfileResult> {
    const skippedItems = (paginationDto.page - 1) * paginationDto.limit;
    const totalCount = await this.companyProfileRepository.count();
    const companyProfiles = await this.companyProfileRepository
      .createQueryBuilder()
      .orderBy('id', 'DESC')
      .offset(skippedItems)
      .limit(paginationDto.limit)
      .getMany();
    return {
      totalCount,
      page: paginationDto.page,
      limit: paginationDto.limit,
      data: companyProfiles,
    };
  }
  async testNotification(id) {
    let companyProfile = await this.companyProfileRepository.findOne(id);
    return companyProfile;
  }
  async createCompanyProfile(companyProfileEntity: CompanyProfileEntity) {
    return this.companyProfileRepository.save(companyProfileEntity);
  }
  async updateCompanyUrl(id, url): Promise<CompanyProfileEntity> {
    let companyProfile = await this.companyProfileRepository.findOne(id);
    companyProfile.url = url;
    await this.companyProfileRepository.save(companyProfile);
    return companyProfile;
  }
}

import { Repository } from 'typeorm';
import { CompanyProfileEntity } from './company-profile.entity';
import { PaginationDto } from './Pagination.dto';
import { PaginatedCompanyProfileResult } from './PaginatedCompanyProfileResult.dto';
export declare class CompanyProfileService {
    private companyProfileRepository;
    constructor(companyProfileRepository: Repository<CompanyProfileEntity>);
    getAll(paginationDto: PaginationDto): Promise<PaginatedCompanyProfileResult>;
    getCompanyProfileById(_id: number): Promise<CompanyProfileEntity>;
    getCompanyProfileWithTransaction(paginationDto: PaginationDto): Promise<PaginatedCompanyProfileResult>;
    testNotification(id: any): Promise<CompanyProfileEntity>;
    createCompanyProfile(companyProfileEntity: CompanyProfileEntity): Promise<CompanyProfileEntity>;
    updateCompanyUrl(id: any, url: any): Promise<CompanyProfileEntity>;
}

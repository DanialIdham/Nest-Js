import { CompanyProfileService } from './company-profile.service';
import { CompanyProfileEntity } from './company-profile.entity';
import { PaginationDto } from './Pagination.dto';
import { PaginatedCompanyProfileResult } from './PaginatedCompanyProfileResult.dto';
export declare class CompanyProfileController {
    private readonly companyProfileService;
    constructor(companyProfileService: CompanyProfileService);
    getAll(paginationDto: PaginationDto): Promise<PaginatedCompanyProfileResult>;
    getById(params: any): Promise<CompanyProfileEntity>;
    testNotification(body: any): Promise<{
        headers: {
            'Content-Type': string;
            'X-CMC_PRO_API_KEY': string;
        };
        testData: any;
        status: string;
    }>;
    getCompanyProfileWithTransaction(paginationDto: PaginationDto): Promise<PaginatedCompanyProfileResult>;
    create(companyProfileEntity: CompanyProfileEntity): Promise<CompanyProfileEntity>;
    updateUrl(body: any): Promise<CompanyProfileEntity>;
}

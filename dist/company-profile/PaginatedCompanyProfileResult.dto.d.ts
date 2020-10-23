import { CompanyProfileEntity } from "./company-profile.entity";
export declare class PaginatedCompanyProfileResult {
    data: CompanyProfileEntity[];
    page: number;
    limit: number;
    totalCount: number;
}

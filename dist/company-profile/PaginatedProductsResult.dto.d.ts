import { CompanyProfileEntity } from "./company-profile.entity";
export declare class PaginatedCompanyProfileResultDto {
    data: CompanyProfileEntity[];
    page: number;
    limit: number;
    totalCount: number;
}

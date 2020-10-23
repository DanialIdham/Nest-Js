import { CompanyProfileEntity } from "./company-profile.entity";

export class PaginatedCompanyProfileResult {
  data: CompanyProfileEntity[]
  page: number
  limit: number
  totalCount: number
}
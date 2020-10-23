"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const company_profile_entity_1 = require("./company-profile.entity");
let CompanyProfileService = class CompanyProfileService {
    constructor(companyProfileRepository) {
        this.companyProfileRepository = companyProfileRepository;
    }
    async getAll(paginationDto) {
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
    async getCompanyProfileById(_id) {
        return await this.companyProfileRepository.findOne(_id);
    }
    async getCompanyProfileWithTransaction(paginationDto) {
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
    async createCompanyProfile(companyProfileEntity) {
        return this.companyProfileRepository.save(companyProfileEntity);
    }
    async updateCompanyUrl(id, url) {
        let companyProfile = await this.companyProfileRepository.findOne(id);
        companyProfile.url = url;
        await this.companyProfileRepository.save(companyProfile);
        return companyProfile;
    }
};
CompanyProfileService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(company_profile_entity_1.CompanyProfileEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CompanyProfileService);
exports.CompanyProfileService = CompanyProfileService;
//# sourceMappingURL=company-profile.service.js.map
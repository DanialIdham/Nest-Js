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
exports.CompanyProfileController = void 0;
const common_1 = require("@nestjs/common");
const company_profile_service_1 = require("./company-profile.service");
const company_profile_entity_1 = require("./company-profile.entity");
const Pagination_dto_1 = require("./Pagination.dto");
const axios_1 = require("axios");
let CompanyProfileController = class CompanyProfileController {
    constructor(companyProfileService) {
        this.companyProfileService = companyProfileService;
    }
    getAll(paginationDto) {
        paginationDto.page = Number(paginationDto.page);
        paginationDto.limit = Number(paginationDto.limit);
        return this.companyProfileService.getAll(Object.assign(Object.assign({}, paginationDto), { limit: paginationDto.limit > 10 ? 10 : paginationDto.limit }));
    }
    async getById(params) {
        return await this.companyProfileService.getCompanyProfileById(params.id);
    }
    async testNotification(body) {
        if (!body.id) {
            throw new common_1.HttpException('Id not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!body.testData) {
            throw new common_1.HttpException('test data not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!body.url) {
            throw new common_1.HttpException('Url Not found', common_1.HttpStatus.NOT_FOUND);
        }
        let response = await axios_1.default
            .post(body.url, {
            headers: {
                'Content-Type': 'application/json',
                'X-CMC_PRO_API_KEY': 'Xendit'
            },
            testData: body.testData,
        })
            .then(function (response) {
            return {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CMC_PRO_API_KEY': 'Xendit'
                },
                testData: body.testData,
                status: "Your Notification Is Succesfully Send",
            };
        })
            .catch(function (error) {
            throw new common_1.HttpException('Notification Failed, It might be the url', common_1.HttpStatus.NOT_FOUND);
        });
        return response;
    }
    getCompanyProfileWithTransaction(paginationDto) {
        paginationDto.page = Number(paginationDto.page);
        paginationDto.limit = Number(paginationDto.limit);
        return this.companyProfileService.getCompanyProfileWithTransaction(Object.assign(Object.assign({}, paginationDto), { limit: paginationDto.limit > 10 ? 10 : paginationDto.limit }));
    }
    async create(companyProfileEntity) {
        return this.companyProfileService.createCompanyProfile(companyProfileEntity);
    }
    async updateUrl(body) {
        if (!body.id) {
            throw new common_1.HttpException('Id not found', common_1.HttpStatus.NOT_FOUND);
        }
        if (!body.url) {
            throw new common_1.HttpException('Url not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.companyProfileService.updateCompanyUrl(body.id, body.url);
    }
};
__decorate([
    common_1.Get('all'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CompanyProfileController.prototype, "getAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyProfileController.prototype, "getById", null);
__decorate([
    common_1.Post('testNotification'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyProfileController.prototype, "testNotification", null);
__decorate([
    common_1.Get('transactions'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Pagination_dto_1.PaginationDto]),
    __metadata("design:returntype", Promise)
], CompanyProfileController.prototype, "getCompanyProfileWithTransaction", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [company_profile_entity_1.CompanyProfileEntity]),
    __metadata("design:returntype", Promise)
], CompanyProfileController.prototype, "create", null);
__decorate([
    common_1.Put('update-url'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CompanyProfileController.prototype, "updateUrl", null);
CompanyProfileController = __decorate([
    common_1.Controller('company-profile'),
    __metadata("design:paramtypes", [company_profile_service_1.CompanyProfileService])
], CompanyProfileController);
exports.CompanyProfileController = CompanyProfileController;
//# sourceMappingURL=company-profile.controller.js.map
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
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
const transaction_entity_1 = require("./transaction.entity");
const notifications_service_1 = require("../notifications/notifications.service");
const notifications_entity_1 = require("../notifications/notifications.entity");
const company_profile_service_1 = require("../company-profile/company-profile.service");
let TransactionController = class TransactionController {
    constructor(transactionService, notificationsService, companyProfileService) {
        this.transactionService = transactionService;
        this.notificationsService = notificationsService;
        this.companyProfileService = companyProfileService;
    }
    getAll() {
        return this.transactionService.getAllTransaction();
    }
    async create(transactionEntity) {
        const data = await this.transactionService.createTransactionEntity(transactionEntity);
        console.log(transactionEntity);
        let CompanyProfile = await this.companyProfileService.getCompanyProfileById(transactionEntity.company_profile_id);
        if (!CompanyProfile || !CompanyProfile.url) {
            throw new common_1.HttpException('Company profile does not have an URL yet', common_1.HttpStatus.NOT_FOUND);
        }
        else {
            let notificationEntity = new notifications_entity_1.NotificationsEntity();
            notificationEntity.status = 'New';
            notificationEntity.notificationText = transactionEntity.notificationText;
            notificationEntity.url = CompanyProfile.url;
            notificationEntity.sent = 0;
            notificationEntity.count = 0;
            notificationEntity.transaction_id = data.id;
            let NotificationData = await this.notificationsService.createNotification(notificationEntity);
        }
        return {
            statusCode: 200,
            data: data,
        };
    }
};
__decorate([
    common_1.Get('/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransactionController.prototype, "getAll", null);
__decorate([
    common_1.Post('create'),
    common_1.HttpCode(200),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transaction_entity_1.TransactionEntity]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "create", null);
TransactionController = __decorate([
    common_1.Controller('transaction'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService,
        notifications_service_1.NotificationsService,
        company_profile_service_1.CompanyProfileService])
], TransactionController);
exports.TransactionController = TransactionController;
//# sourceMappingURL=transaction.controller.js.map
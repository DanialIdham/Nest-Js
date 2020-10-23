"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionModule = void 0;
const common_1 = require("@nestjs/common");
const transaction_service_1 = require("./transaction.service");
const transaction_controller_1 = require("./transaction.controller");
const transaction_entity_1 = require("./transaction.entity");
const typeorm_1 = require("@nestjs/typeorm");
const notifications_entity_1 = require("../notifications/notifications.entity");
const notifications_service_1 = require("../notifications/notifications.service");
const notifications_module_1 = require("../notifications/notifications.module");
const company_profile_service_1 = require("../company-profile/company-profile.service");
const company_profile_module_1 = require("../company-profile/company-profile.module");
const company_profile_entity_1 = require("../company-profile/company-profile.entity");
let TransactionModule = class TransactionModule {
};
TransactionModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([transaction_entity_1.TransactionEntity, notifications_entity_1.NotificationsEntity, company_profile_entity_1.CompanyProfileEntity]), notifications_module_1.NotificationsModule, company_profile_module_1.CompanyProfileModule],
        providers: [transaction_service_1.TransactionService, notifications_service_1.NotificationsService, company_profile_service_1.CompanyProfileService],
        controllers: [transaction_controller_1.TransactionController],
    })
], TransactionModule);
exports.TransactionModule = TransactionModule;
//# sourceMappingURL=transaction.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyProfileModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_profile_entity_1 = require("./company-profile.entity");
const company_profile_service_1 = require("./company-profile.service");
const company_profile_controller_1 = require("./company-profile.controller");
let CompanyProfileModule = class CompanyProfileModule {
};
CompanyProfileModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([company_profile_entity_1.CompanyProfileEntity])],
        providers: [company_profile_service_1.CompanyProfileService],
        controllers: [company_profile_controller_1.CompanyProfileController],
        exports: [company_profile_service_1.CompanyProfileService]
    })
], CompanyProfileModule);
exports.CompanyProfileModule = CompanyProfileModule;
//# sourceMappingURL=company-profile.module.js.map
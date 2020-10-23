"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const company_profile_module_1 = require("./company-profile/company-profile.module");
const transaction_module_1 = require("./transaction/transaction.module");
const notifications_module_1 = require("./notifications/notifications.module");
const users_module_1 = require("./users/users.module");
const config_1 = require("@nestjs/config");
const database_config_1 = require("./config/database.config");
const config_2 = require("./config/config");
const schedule_1 = require("@nestjs/schedule");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            company_profile_module_1.CompanyProfileModule,
            transaction_module_1.TransactionModule,
            notifications_module_1.NotificationsModule,
            schedule_1.ScheduleModule.forRoot(),
            config_1.ConfigModule.forRoot({
                expandVariables: true,
                ignoreEnvFile: true,
                isGlobal: true,
                load: [config_2.config],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useClass: database_config_1.DatabaseConfig,
            }),
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
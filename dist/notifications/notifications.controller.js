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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsController = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const notifications_service_1 = require("./notifications.service");
const axios_1 = require("axios");
const _ = require('lodash');
let NotificationsController = class NotificationsController {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    async get() {
        return await this.notificationsService.getAllNotifications();
    }
    async getFailed() {
        return this.notificationsService.getAllFailedNotification();
    }
    async sendNotification() {
        let data = await this.notificationsService.cronNotificationForEvery10Seconds();
        let notPassed = [];
        let passed = [];
        for (let i = 0; i < data.length; i++) {
            await axios_1.default
                .post(data[i].url, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CMC_PRO_API_KEY': 'Xendit'
                },
                textNotification: data[i].notificationText,
            })
                .then(function (response) {
                passed.push(data[i]);
            })
                .catch(function (error) {
                notPassed.push(data[i]);
            });
        }
        for (let i = 0; i < passed.length; i++) {
            passed[i].sent = 1;
            console.log(passed[i]);
            return await this.notificationsService.updateNotification(passed[i]);
        }
        for (let i = 0; i < notPassed.length; i++) {
            notPassed[i].count += 1;
            return await this.notificationsService.updateNotification(notPassed[i]);
        }
    }
    async sendNotification2() {
        let data = await this.notificationsService.cronNotificationForEvery20Seconds();
        let notPassed = [];
        let passed = [];
        for (let i = 0; i < data.length; i++) {
            await axios_1.default
                .post(data[i].url, {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CMC_PRO_API_KEY': 'Xendit'
                },
                textNotification: data[i].notificationText,
            })
                .then(function (response) {
                passed.push(data[i]);
            })
                .catch(function (error) {
                notPassed.push(data[i]);
            });
        }
        for (let i = 0; i < passed.length; i++) {
            passed[i].sent = 1;
            console.log(passed[i]);
            return await this.notificationsService.updateNotification(passed[i]);
        }
        for (let i = 0; i < notPassed.length; i++) {
            notPassed[i].count += 1;
            return await this.notificationsService.updateNotification(notPassed[i]);
        }
    }
};
__decorate([
    common_1.Get('/get-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "get", null);
__decorate([
    common_1.Get('/failed'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getFailed", null);
__decorate([
    schedule_1.Cron('*/1 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "sendNotification", null);
__decorate([
    schedule_1.Cron('*/2 * * * * *'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "sendNotification2", null);
NotificationsController = __decorate([
    common_1.Controller('notifications'),
    __metadata("design:paramtypes", [notifications_service_1.NotificationsService])
], NotificationsController);
exports.NotificationsController = NotificationsController;
//# sourceMappingURL=notifications.controller.js.map
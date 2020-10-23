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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const notifications_entity_1 = require("./notifications.entity");
const _ = require('lodash');
let NotificationsService = class NotificationsService {
    constructor(notificationsRepository) {
        this.notificationsRepository = notificationsRepository;
    }
    async getAllNotifications() {
        return await this.notificationsRepository.find({});
    }
    async getAllFailedNotification() {
        return await this.notificationsRepository.find({
            where: [{ sent: 0 }],
        });
    }
    async createNotification(notificationEntity) {
        return await this.notificationsRepository.save(notificationEntity);
    }
    async updateNotification(notificationEntity) {
        return await this.notificationsRepository.save(notificationEntity);
    }
    async cronNotificationForEvery10Seconds() {
        let data = await this.notificationsRepository.find({
            where: {
                count: typeorm_2.LessThanOrEqual(3),
                sent: 0,
            },
        });
        return data;
    }
    async cronNotificationForEvery20Seconds() {
        let data = await this.notificationsRepository.find({
            where: {
                count: typeorm_2.LessThanOrEqual(10),
                sent: 0,
            },
        });
        return data;
    }
    async updateNotificationStatus(id, url) {
        console.log(id, url);
        return;
    }
};
NotificationsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(notifications_entity_1.NotificationsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NotificationsService);
exports.NotificationsService = NotificationsService;
//# sourceMappingURL=notifications.service.js.map
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
exports.TransactionEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const notifications_entity_1 = require("../notifications/notifications.entity");
let TransactionEntity = class TransactionEntity {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "notificationText", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column('decimal', { precision: 23, scale: 2, default: 0 }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "amount", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' }),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP()',
        onUpdate: 'CURRENT_TIMESTAMP()',
    }),
    __metadata("design:type", Date)
], TransactionEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', nullable: true, default: null }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "deleted", void 0);
__decorate([
    typeorm_1.OneToOne(type => notifications_entity_1.NotificationsEntity),
    typeorm_1.JoinColumn({ name: 'notification_id' }),
    __metadata("design:type", notifications_entity_1.NotificationsEntity)
], TransactionEntity.prototype, "notificationsEntity", void 0);
__decorate([
    typeorm_1.Column({ type: 'bigint', nullable: true, default: null }),
    __metadata("design:type", Number)
], TransactionEntity.prototype, "company_profile_id", void 0);
TransactionEntity = __decorate([
    typeorm_1.Entity({ name: 'transaction' })
], TransactionEntity);
exports.TransactionEntity = TransactionEntity;
//# sourceMappingURL=transaction.entity.js.map
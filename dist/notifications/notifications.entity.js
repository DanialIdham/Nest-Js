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
exports.NotificationsEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const transaction_entity_1 = require("../transaction/transaction.entity");
let NotificationsEntity = class NotificationsEntity {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", Number)
], NotificationsEntity.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ type: 'longtext' }),
    __metadata("design:type", String)
], NotificationsEntity.prototype, "notificationText", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ type: 'longtext' }),
    __metadata("design:type", String)
], NotificationsEntity.prototype, "status", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], NotificationsEntity.prototype, "sent", void 0);
__decorate([
    class_validator_1.IsNumber(),
    typeorm_1.Column({ type: 'int' }),
    __metadata("design:type", Number)
], NotificationsEntity.prototype, "count", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ type: 'longtext' }),
    __metadata("design:type", String)
], NotificationsEntity.prototype, "url", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP()' }),
    __metadata("design:type", Date)
], NotificationsEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP()',
        onUpdate: 'CURRENT_TIMESTAMP()',
    }),
    __metadata("design:type", Date)
], NotificationsEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', nullable: true, default: null }),
    __metadata("design:type", String)
], NotificationsEntity.prototype, "deleted", void 0);
__decorate([
    typeorm_1.OneToOne(type => transaction_entity_1.TransactionEntity),
    typeorm_1.JoinColumn({ name: 'transaction_id' }),
    __metadata("design:type", transaction_entity_1.TransactionEntity)
], NotificationsEntity.prototype, "transactionEntity", void 0);
__decorate([
    typeorm_1.Column({ type: 'bigint', nullable: true, default: null }),
    __metadata("design:type", Number)
], NotificationsEntity.prototype, "transaction_id", void 0);
NotificationsEntity = __decorate([
    typeorm_1.Entity({ name: "notifications" })
], NotificationsEntity);
exports.NotificationsEntity = NotificationsEntity;
//# sourceMappingURL=notifications.entity.js.map
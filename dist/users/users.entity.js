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
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
let UsersEntity = class UsersEntity {
};
__decorate([
    class_validator_1.IsNumber(),
    class_validator_1.IsOptional(),
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], UsersEntity.prototype, "id", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ length: 20 }),
    __metadata("design:type", String)
], UsersEntity.prototype, "name", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ type: 'longtext' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "username", void 0);
__decorate([
    class_validator_1.IsString(),
    typeorm_1.Column({ type: 'longtext' }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP()',
    }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "created", void 0);
__decorate([
    typeorm_1.Column({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP()',
        onUpdate: 'CURRENT_TIMESTAMP()',
    }),
    __metadata("design:type", Date)
], UsersEntity.prototype, "updated", void 0);
__decorate([
    typeorm_1.Column({ type: 'timestamp', nullable: true, default: null }),
    __metadata("design:type", String)
], UsersEntity.prototype, "deleted", void 0);
UsersEntity = __decorate([
    typeorm_1.Entity({ name: "users" })
], UsersEntity);
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=users.entity.js.map
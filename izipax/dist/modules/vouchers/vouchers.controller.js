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
exports.VouchersController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../../lib/decorators");
const voucher_dto_1 = require("../../lib/dto/voucher.dto");
const guards_1 = require("../../lib/guards");
const pipes_1 = require("../../lib/pipes");
const types_1 = require("../../lib/types");
const vouchers_service_1 = require("./vouchers.service");
let VouchersController = class VouchersController {
    constructor(vouchersService) {
        this.vouchersService = vouchersService;
    }
    create(createVoucherDto) {
        return this.vouchersService.create(createVoucherDto);
    }
    findAll() {
        return this.vouchersService.findAll();
    }
    findOne(id) {
        return this.vouchersService.findOne(id);
    }
    update(id, updateVoucherDto) {
        return this.vouchersService.update(id, updateVoucherDto);
    }
    remove(id) {
        return this.vouchersService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [voucher_dto_1.VoucherCreateDto]),
    __metadata("design:returntype", void 0)
], VouchersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], VouchersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], VouchersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe,
        voucher_dto_1.VoucherUpdateDto]),
    __metadata("design:returntype", void 0)
], VouchersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], VouchersController.prototype, "remove", null);
VouchersController = __decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Controller)('api/vouchers'),
    __metadata("design:paramtypes", [vouchers_service_1.VouchersService])
], VouchersController);
exports.VouchersController = VouchersController;
//# sourceMappingURL=vouchers.controller.js.map
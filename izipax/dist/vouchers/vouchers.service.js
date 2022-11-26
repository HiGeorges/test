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
exports.VouchersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const voucher_schema_1 = require("../lib/schemas/voucher.schema");
const timeUuid = require("time-uuid");
let VouchersService = class VouchersService {
    constructor(voucherModel) {
        this.voucherModel = voucherModel;
    }
    async create(payload) {
        const voucher = await this.voucherModel.create(Object.assign(Object.assign({}, payload), { code: timeUuid() }));
        if (!voucher)
            throw new common_1.HttpException('VOUCHER.ERROR.VOUCHER_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.CREATED,
            message: 'VOUCHER.SUCCESS.VOUCHER_CREATED',
        };
    }
    async findAll() {
        const voucher = await this.voucherModel.find();
        if (!voucher)
            throw new common_1.HttpException('VOUCHER.ERROR.VOUCHER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return voucher;
    }
    findOne(id) {
        const voucher = this.voucherModel.findOne(id);
        if (!voucher)
            throw new common_1.HttpException('VOUCHER.ERROR.VOUCHER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return voucher;
    }
    update(id, updateVoucherDto) {
        const voucher = this.voucherModel.findByIdAndUpdate(id, updateVoucherDto);
        if (!voucher)
            throw new common_1.HttpException('VOUCHER.ERROR.VOUCHER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return voucher;
    }
    remove(id) {
        const voucher = this.voucherModel.findByIdAndDelete(id);
        if (!voucher)
            throw new common_1.HttpException('VOUCHER.ERROR.VOUCHER_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return voucher;
    }
};
VouchersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(voucher_schema_1.Voucher.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], VouchersService);
exports.VouchersService = VouchersService;
//# sourceMappingURL=vouchers.service.js.map
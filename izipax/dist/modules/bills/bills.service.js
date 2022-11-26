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
exports.BillsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bill_schema_1 = require("../../lib/schemas/bill.schema");
let BillsService = class BillsService {
    constructor(billModel) {
        this.billModel = billModel;
    }
    async create(payload) {
        const bill = await this.billModel.create(Object.assign({}, payload));
        if (!bill)
            throw new common_1.HttpException('BILL.ERROR.BILL_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.CREATED,
            message: 'BILL.SUCCESS.BILL_CREATED',
        };
    }
    async findAll() {
        const bill = await this.billModel.find();
        if (!bill)
            throw new common_1.HttpException('BILL.ERROR.BILL_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return bill;
    }
    async findOne(id) {
        const bill = await this.billModel.findById(id);
        if (!bill)
            throw new common_1.HttpException('BILL.ERROR.BILL_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return bill;
    }
    async update(id, updateBillDto) {
        const bill = await this.billModel.findByIdAndUpdate(id, updateBillDto);
        if (!bill)
            throw new common_1.HttpException('BILL.ERROR.BILL_NOT_UPDATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'BILL.SUCCESS.BILL_UPDATED',
        };
    }
    async remove(id) {
        const bill = await this.billModel.findByIdAndDelete(id);
        if (!bill)
            throw new common_1.HttpException('BILL.ERROR.BILL_NOT_DELETED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'BILL.SUCCESS.BILL_DELETED',
        };
    }
};
BillsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(bill_schema_1.Bill.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BillsService);
exports.BillsService = BillsService;
//# sourceMappingURL=bills.service.js.map
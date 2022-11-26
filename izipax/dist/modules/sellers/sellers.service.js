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
exports.SellersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const seller_schema_1 = require("../../lib/schemas/seller.schema");
let SellersService = class SellersService {
    constructor(sellerModel) {
        this.sellerModel = sellerModel;
    }
    async create(payload) {
        const seller = await this.sellerModel.create(Object.assign({}, payload));
        if (!seller)
            throw new common_1.HttpException('SELLER.ERROR.SELLER_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.CREATED,
            message: 'SELLER.SUCCESS.SELLER_CREATED',
        };
    }
    async findAll() {
        const seller = await this.sellerModel.find();
        if (!seller)
            throw new common_1.HttpException('SELLER.ERROR.SELLER_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return seller;
    }
    async find(query) {
        return await this.sellerModel.find(query);
    }
    async findOne(id) {
        const seller = await this.sellerModel.findById(id);
        if (!seller)
            throw new common_1.HttpException('SELLER.ERROR.SELLER_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return seller;
    }
    async update(id, updateSellerDto) {
        const seller = await this.sellerModel.findByIdAndUpdate(id, updateSellerDto);
        if (!seller)
            throw new common_1.HttpException('SELLER.ERROR.SELLER_NOT_UPDATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'SELLER.SUCCESS.SELLER_UPDATED',
        };
    }
    async remove(id) {
        const seller = await this.sellerModel.findByIdAndDelete(id);
        if (!seller)
            throw new common_1.HttpException('SELLER.ERROR.SELLER_NOT_DELETED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'SELLER.SUCCESS.SELLER_DELETED',
        };
    }
};
SellersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(seller_schema_1.Seller.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SellersService);
exports.SellersService = SellersService;
//# sourceMappingURL=sellers.service.js.map
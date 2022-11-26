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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../lib/schemas");
const types_1 = require("../lib/types");
let TransactionsService = class TransactionsService {
    constructor(transactionModel) {
        this.transactionModel = transactionModel;
    }
    async create(payload) {
        console.log(payload);
        if (payload.paymentMethod === types_1.TransactionMETHODS.MTNBJ &&
            payload.type === types_1.TransactionTYPES.DEPOSIT) {
            const transaction = await this.transactionModel.create(Object.assign(Object.assign({}, payload), { transref: new Date().getTime() }));
            if (!transaction)
                throw new common_1.HttpException('TRANSACTION.ERROR.TRANSACTION_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'TRANSACTION.SUCCESS.TRANSACTION_CREATED',
            };
        }
        throw new common_1.HttpException('TRANSACTION.ERROR.TRANSACTION_METHOD_NOT_ALLOWED', common_1.HttpStatus.METHOD_NOT_ALLOWED);
    }
    createMtnTransaction(createTransactionDto) {
        return createTransactionDto;
    }
    createMoovTransaction(createTransactionDto) {
        return createTransactionDto;
    }
    findAll() {
        return `This action returns all transactions`;
    }
    findOne(id) {
        return `This action returns a #${id} transaction`;
    }
    update(id, updateTransactionDto) {
        return updateTransactionDto;
    }
};
TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.Transaction.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TransactionsService);
exports.TransactionsService = TransactionsService;
//# sourceMappingURL=transactions.service.js.map
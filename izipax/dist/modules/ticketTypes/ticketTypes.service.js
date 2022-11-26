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
exports.TicketTypesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const ticketType_schema_1 = require("../../lib/schemas/ticketType.schema");
let TicketTypesService = class TicketTypesService {
    constructor(ticketTypeModel) {
        this.ticketTypeModel = ticketTypeModel;
    }
    async create(payload) {
        const exist = await this.ticketTypeModel.exists({
            name: payload.name,
        });
        if (!exist) {
            const ticketType = await this.ticketTypeModel.create(Object.assign({}, payload));
            if (!ticketType)
                throw new common_1.HttpException('TICKET_TYPE.ERROR.TICKET_TYPE_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'TICKET_TYPE.SUCCESS.TICKET_TYPE_CREATED',
            };
        }
        else
            throw new common_1.HttpException('TICKET_TYPE.ERROR.TICKET_TYPE_ALREADY_EXIST', common_1.HttpStatus.BAD_REQUEST);
    }
    async findAll() {
        const ticketType = await this.ticketTypeModel.find();
        if (!ticketType)
            throw new common_1.HttpException('TICKET_TYPE.ERROR.TICKET_TYPE_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return ticketType;
    }
    async find(query) {
        return await this.ticketTypeModel.find(query);
    }
    async findOne(id) {
        const ticketType = await this.ticketTypeModel.findById(id);
        if (!ticketType)
            throw new common_1.HttpException('TICKET_TYPE.ERROR.TICKET_TYPE_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return ticketType;
    }
    async update(id, updateTicketTypeDto) {
        const exist = await this.ticketTypeModel.exists({
            name: updateTicketTypeDto.name,
        });
        if (!exist) {
            const ticketType = await this.ticketTypeModel.findByIdAndUpdate(id, updateTicketTypeDto);
            if (!ticketType)
                throw new common_1.HttpException('TICKET_TYPE.ERROR.TICKET_TYPE_NOT_UPDATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            return {
                statusCode: common_1.HttpStatus.OK,
                message: 'TICKET_TYPE.SUCCESS.TICKET_TYPE_UPDATED',
            };
        }
        else
            throw new common_1.HttpException('TICKET_TYPE.ERROR.TICKET_TYPE_ALREADY_EXIST', common_1.HttpStatus.BAD_REQUEST);
    }
    async remove(id) {
        const ticketType = await this.ticketTypeModel.findByIdAndDelete(id);
        if (!ticketType)
            throw new common_1.HttpException('TICKET_TYPE.ERROR.TICKET_TYPE_NOT_DELETED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'TICKET_TYPE.SUCCESS.TICKET_TYPE_DELETED',
        };
    }
};
TicketTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(ticketType_schema_1.TicketType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TicketTypesService);
exports.TicketTypesService = TicketTypesService;
//# sourceMappingURL=ticketTypes.service.js.map
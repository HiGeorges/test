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
exports.EventTypeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const eventType_schema_1 = require("../../lib/schemas/eventType.schema");
let EventTypeService = class EventTypeService {
    constructor(eventTypeModel) {
        this.eventTypeModel = eventTypeModel;
    }
    async create(payload) {
        const exist = await this.eventTypeModel.exists({
            label: payload.label,
        });
        if (!exist) {
            const eventType = await this.eventTypeModel.create(payload);
            if (!eventType)
                throw new common_1.HttpException('EVENT_TYPE.ERROR.EVENT_TYPE_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            else
                return {
                    statusCode: common_1.HttpStatus.CREATED,
                    message: 'EVENT_TYPE.SUCCESS.EVENT_TYPE_CREATED',
                };
        }
        else
            throw new common_1.HttpException('EVENT_TYPE.ERROR.EVENT_TYPE_ALREADY_EXIST', common_1.HttpStatus.BAD_REQUEST);
    }
    async findAll() {
        const eventType = await this.eventTypeModel.find();
        if (!eventType)
            throw new common_1.HttpException('EVENT_TYPE.ERROR.EVENT_TYPE_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return eventType;
    }
    async findOne(id) {
        const eventType = await this.eventTypeModel.findById(id);
        if (!eventType)
            throw new common_1.HttpException('EVENT_TYPE.ERROR.EVENT_TYPE_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return eventType;
    }
    async update(id, updateEventTypeDto) {
        const exist = await this.eventTypeModel.exists({
            label: updateEventTypeDto.label,
        });
        if (!exist) {
            const eventType = this.eventTypeModel.findOneAndUpdate({ _id: id }, updateEventTypeDto);
            if (!eventType)
                throw new common_1.HttpException('EVENT_TYPE.ERROR.EVENT_TYPE_NOT_UPDATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            else
                return {
                    statusCode: common_1.HttpStatus.ACCEPTED,
                    message: 'EVENT_TYPE.SUCCESS.EVENT_TYPE_UPDATED',
                };
        }
        else
            throw new common_1.HttpException('EVENT_TYPE.ERROR.EVENT_TYPE_ALREADY_EXIST', common_1.HttpStatus.BAD_REQUEST);
    }
    async remove(id) {
        const eventType = await this.eventTypeModel.findOneAndDelete({ _id: id });
        const exists = await this.eventTypeModel.exists({ _id: id });
        if (!exists) {
            if (!eventType)
                throw new common_1.HttpException('EVENT_TYPE.ERROR.EVENT_TYPE_NOT_DELETED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            else
                return {
                    statusCode: common_1.HttpStatus.ACCEPTED,
                    message: 'EVENT_TYPE.SUCCESS.EVENT_TYPE_DELETED',
                };
        }
        else {
            throw new common_1.HttpException('EVENT_TYPE.ERROR.EVENT_TYPE_NOT_DELETED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
EventTypeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(eventType_schema_1.EventType.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventTypeService);
exports.EventTypeService = EventTypeService;
//# sourceMappingURL=eventType.service.js.map
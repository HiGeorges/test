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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../lib/schemas");
let EventsService = class EventsService {
    constructor(EventModel) {
        this.EventModel = EventModel;
    }
    async create(payload) {
        const event = await this.EventModel.create(payload);
        if (!event)
            throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return {
            statusCode: common_1.HttpStatus.CREATED,
            message: 'EVENT.SUCCESS.EVENT_CREATED',
        };
    }
    async findAll() {
        const event = await this.EventModel.find();
        if (!event)
            throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return event;
    }
    async findOne(id) {
        const event = await this.EventModel.findById(id);
        if (!event)
            throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return event;
    }
    async update(id, updateEventDto) {
        const event = await this.EventModel.findOneAndUpdate(id, updateEventDto);
        if (!event)
            throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return event;
    }
    async remove(id) {
        const event = await this.EventModel.findOneAndDelete(id);
        if (!event)
            throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return event;
    }
};
EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.Event.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map
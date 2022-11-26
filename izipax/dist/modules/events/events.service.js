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
const schemas_1 = require("../../lib/schemas");
const types_1 = require("../../lib/types");
let EventsService = class EventsService {
    constructor(EventModel) {
        this.EventModel = EventModel;
    }
    async create(payload) {
        const exist = await this.EventModel.exists({
            name: payload.name,
        });
        if (!exist) {
            const event = await this.EventModel.create(payload);
            if (!event)
                throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'EVENT.SUCCESS.EVENT_CREATED',
            };
        }
        else
            throw new common_1.HttpException('EVENT.ERROR.EVENT_ALREADY_EXIST', common_1.HttpStatus.BAD_REQUEST);
    }
    async findAll() {
        const event = await this.EventModel.find();
        if (!event)
            throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return event;
    }
    async find(query) {
        return await this.EventModel.find(query);
    }
    async findOne(id) {
        const event = await this.EventModel.findById(id);
        if (!event)
            throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        return event;
    }
    async update(id, updateEventDto) {
        const exist = await this.EventModel.find({ name: updateEventDto.name })
            .where('name')
            .ne(updateEventDto.name)
            .count()
            .exec();
        if (!exist) {
            const event = await this.EventModel.findOneAndUpdate(id, updateEventDto);
            if (!event)
                throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_FOUND', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            return event;
        }
        else
            throw new common_1.HttpException('EVENT.ERROR.EVENT_ALREADY_EXIST', common_1.HttpStatus.BAD_REQUEST);
    }
    async archived(id) {
        const event = await this.EventModel.findById(id);
        if (!event)
            throw new common_1.HttpException('EVENT.ERROR.EVENT_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        else {
            event.visibility = types_1.EventVisibility.ARCHIVED;
            await event.save();
        }
    }
};
EventsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.Event.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EventsService);
exports.EventsService = EventsService;
//# sourceMappingURL=events.service.js.map
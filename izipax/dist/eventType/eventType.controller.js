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
exports.EventTypeController = void 0;
const common_1 = require("@nestjs/common");
const eventType_dto_1 = require("../lib/dto/eventType.dto");
const pipes_1 = require("../lib/pipes");
const eventType_service_1 = require("./eventType.service");
let EventTypeController = class EventTypeController {
    constructor(eventTypeService) {
        this.eventTypeService = eventTypeService;
    }
    create(createEventTypeDto) {
        return this.eventTypeService.create(createEventTypeDto);
    }
    findAll() {
        return this.eventTypeService.findAll();
    }
    findOne(id) {
        return this.eventTypeService.findOne(id);
    }
    update(id, updateEventTypeDto) {
        return this.eventTypeService.update(id, updateEventTypeDto);
    }
    remove(id) {
        return this.eventTypeService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [eventType_dto_1.EventTypeCreateDto]),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe,
        eventType_dto_1.EventTypeUpdateDto]),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], EventTypeController.prototype, "remove", null);
EventTypeController = __decorate([
    (0, common_1.Controller)('api/eventType'),
    __metadata("design:paramtypes", [eventType_service_1.EventTypeService])
], EventTypeController);
exports.EventTypeController = EventTypeController;
//# sourceMappingURL=eventType.controller.js.map
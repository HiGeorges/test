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
exports.TicketTypesController = void 0;
const common_1 = require("@nestjs/common");
const ticketType_dto_1 = require("../lib/dto/ticketType.dto");
const pipes_1 = require("../lib/pipes");
const ticketTypes_service_1 = require("./ticketTypes.service");
let TicketTypesController = class TicketTypesController {
    constructor(ticketTypesService) {
        this.ticketTypesService = ticketTypesService;
    }
    create(createTicketTypeDto) {
        return this.ticketTypesService.create(createTicketTypeDto);
    }
    findAll() {
        return this.ticketTypesService.findAll();
    }
    findOne(id) {
        return this.ticketTypesService.findOne(id);
    }
    update(id, updateTicketTypeDto) {
        return this.ticketTypesService.update(id, updateTicketTypeDto);
    }
    remove(id) {
        return this.ticketTypesService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticketType_dto_1.TicketTypeCreateDto]),
    __metadata("design:returntype", void 0)
], TicketTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TicketTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], TicketTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe,
        ticketType_dto_1.TicketTypeUpdateDto]),
    __metadata("design:returntype", void 0)
], TicketTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], TicketTypesController.prototype, "remove", null);
TicketTypesController = __decorate([
    (0, common_1.Controller)('api/ticketTypes'),
    __metadata("design:paramtypes", [ticketTypes_service_1.TicketTypesService])
], TicketTypesController);
exports.TicketTypesController = TicketTypesController;
//# sourceMappingURL=ticketTypes.controller.js.map
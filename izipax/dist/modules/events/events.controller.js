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
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../../lib/decorators");
const dto_1 = require("../../lib/dto");
const guards_1 = require("../../lib/guards");
const pipes_1 = require("../../lib/pipes");
const types_1 = require("../../lib/types");
const ticketTypes_service_1 = require("../ticketTypes/ticketTypes.service");
const events_service_1 = require("./events.service");
let EventsController = class EventsController {
    constructor(eventsService, ticketTypesService, ticketService) {
        this.eventsService = eventsService;
        this.ticketTypesService = ticketTypesService;
        this.ticketService = ticketService;
    }
    create(createEventDto) {
        return this.eventsService.create(createEventDto);
    }
    findAll() {
        return this.eventsService.findAll();
    }
    findOne(id) {
        return this.eventsService.find({
            _id: id,
            visibility: types_1.EventVisibility.PUBLIC,
        });
    }
    update(id, updateEventDto) {
        return this.eventsService.update(id, updateEventDto);
    }
    archived(id) {
        return this.eventsService.archived(id);
    }
    getOrganisatorVouchers(req) {
        return this.ticketTypesService.find({ eventId: req.event._id });
    }
    getOrganisatorTickets(req) {
        return this.ticketService.find({ eventId: req.event._id });
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.EventCreateDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe, dto_1.EventUpdateDto]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "archived", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Get)('me/ticketTypes'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "getOrganisatorVouchers", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Get)('me/tickets'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EventsController.prototype, "getOrganisatorTickets", null);
EventsController = __decorate([
    (0, common_1.Controller)('api/events'),
    __metadata("design:paramtypes", [events_service_1.EventsService,
        ticketTypes_service_1.TicketTypesService,
        ticketTypes_service_1.TicketTypesService])
], EventsController);
exports.EventsController = EventsController;
//# sourceMappingURL=events.controller.js.map
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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../../lib/decorators");
const guards_1 = require("../../lib/guards");
const pipes_1 = require("../../lib/pipes");
const types_1 = require("../../lib/types");
const agents_service_1 = require("../agents/agents.service");
const events_service_1 = require("../events/events.service");
const sellers_service_1 = require("../sellers/sellers.service");
const vouchers_service_1 = require("../vouchers/vouchers.service");
const users_service_1 = require("./users.service");
let UsersController = class UsersController {
    constructor(usersService, eventsService, vouchersService, sellersService, agentsService) {
        this.usersService = usersService;
        this.eventsService = eventsService;
        this.vouchersService = vouchersService;
        this.sellersService = sellersService;
        this.agentsService = agentsService;
    }
    create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
    findAll(query) {
        return this.usersService.findAll(query);
    }
    findOne(id) {
        return this.usersService.findById(id);
    }
    update(id, updateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
    remove(id) {
        return this.usersService.remove(id);
    }
    getOrganisatorEvents(req) {
        return this.eventsService.find({ createdBy: req.user._id });
    }
    getOrganisatorVouchers(req) {
        return this.vouchersService.find({ createdBy: req.user._id });
    }
    getSeller(req) {
        return this.sellersService.find({ sellerId: req.user._id });
    }
    getAgents(req) {
        return this.agentsService.find({ organisatorId: req.user.organisationID });
    }
    subscribeTo(req, organisatorID) {
        return this.usersService.subscribeTo({
            userID: req.user._id,
            organisatorID,
        });
    }
};
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "remove", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Get)('me/events'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOrganisatorEvents", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Get)('me/vouchers'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getOrganisatorVouchers", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Get)('me/sellers'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getSeller", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN, types_1.Roles.EVENTMANAGER),
    (0, common_1.Get)('me/agents'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getAgents", null);
__decorate([
    (0, common_1.Post)('me/subscribeTo'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "subscribeTo", null);
UsersController = __decorate([
    (0, common_1.Controller)('/api/users'),
    (0, common_1.UseGuards)(guards_1.RolesGuard, guards_1.JwtAuthGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        events_service_1.EventsService,
        vouchers_service_1.VouchersService,
        sellers_service_1.SellersService,
        agents_service_1.AgentsService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map
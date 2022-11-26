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
exports.BillsController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../../lib/decorators");
const bill_dto_1 = require("../../lib/dto/bill.dto");
const guards_1 = require("../../lib/guards");
const pipes_1 = require("../../lib/pipes");
const types_1 = require("../../lib/types");
const bills_service_1 = require("./bills.service");
let BillsController = class BillsController {
    constructor(billsService) {
        this.billsService = billsService;
    }
    create(createBillDto) {
        return this.billsService.create(createBillDto);
    }
    findAll() {
        return this.billsService.findAll();
    }
    findOne(id) {
        return this.billsService.findOne(id);
    }
    update(id, updateBillDto) {
        return this.billsService.update(id, updateBillDto);
    }
};
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bill_dto_1.BillCreateDto]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "create", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "findAll", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "findOne", null);
__decorate([
    (0, decorators_1.ROLESACCESS)(types_1.Roles.ADMIN),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pipes_1.ParseIdPipe, bill_dto_1.BillUpdateDto]),
    __metadata("design:returntype", void 0)
], BillsController.prototype, "update", null);
BillsController = __decorate([
    (0, common_1.UseGuards)(guards_1.JwtAuthGuard, guards_1.RolesGuard),
    (0, common_1.Controller)('api/bills'),
    __metadata("design:paramtypes", [bills_service_1.BillsService])
], BillsController);
exports.BillsController = BillsController;
//# sourceMappingURL=bills.controller.js.map
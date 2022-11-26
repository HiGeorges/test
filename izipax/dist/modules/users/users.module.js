"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const ticketTypes_module_1 = require("./../ticketTypes/ticketTypes.module");
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const users_controller_1 = require("./users.controller");
const mongoose_1 = require("@nestjs/mongoose");
const schemas_1 = require("../../lib/schemas");
const events_module_1 = require("../events/events.module");
const vouchers_module_1 = require("../vouchers/vouchers.module");
const subscribers_module_1 = require("../subscribers/subscribers.module");
const sellers_module_1 = require("../sellers/sellers.module");
const agents_module_1 = require("../agents/agents.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: schemas_1.User.name, schema: schemas_1.UserSchema }]),
            events_module_1.EventsModule,
            vouchers_module_1.VouchersModule,
            ticketTypes_module_1.TicketTypesModule,
            subscribers_module_1.SubscribersModule,
            sellers_module_1.SellersModule,
            agents_module_1.AgentsModule,
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService],
        exports: [users_service_1.UsersService],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map
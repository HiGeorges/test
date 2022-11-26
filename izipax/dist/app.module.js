"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./modules/users/users.module");
const auth_module_1 = require("./modules/auth/auth.module");
const mongoose_1 = require("@nestjs/mongoose");
const categories_module_1 = require("./modules/categories/categories.module");
const transactions_module_1 = require("./modules/transactions/transactions.module");
const events_module_1 = require("./modules/events/events.module");
const ticketTypes_module_1 = require("./modules/ticketTypes/ticketTypes.module");
const eventType_module_1 = require("./modules/eventType/eventType.module");
const tickets_module_1 = require("./modules/tickets/tickets.module");
const sellers_module_1 = require("./modules/sellers/sellers.module");
const agents_module_1 = require("./modules/agents/agents.module");
const bills_module_1 = require("./modules/bills/bills.module");
const vouchers_module_1 = require("./modules/vouchers/vouchers.module");
const subscribers_module_1 = require("./modules/subscribers/subscribers.module");
const payments_module_1 = require("./modules/payments/payments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            common_1.CacheModule.register({
                ttl: 5,
                max: 100,
                isGlobal: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRootAsync({
                useFactory: () => ({
                    uri: process.env.MONGODB_URI,
                    auth: {
                        username: process.env.MONGODB_USER,
                        password: process.env.MONGODB_PASS,
                    },
                }),
            }),
            auth_module_1.AuthModule,
            categories_module_1.CategoriesModule,
            transactions_module_1.TransactionsModule,
            events_module_1.EventsModule,
            eventType_module_1.EventTypeModule,
            ticketTypes_module_1.TicketTypesModule,
            tickets_module_1.TicketsModule,
            sellers_module_1.SellersModule,
            agents_module_1.AgentsModule,
            bills_module_1.BillsModule,
            vouchers_module_1.VouchersModule,
            subscribers_module_1.SubscribersModule,
            payments_module_1.PaymentsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
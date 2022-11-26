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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSchema = exports.Ticket = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const event_schema_1 = require("./event.schema");
const ticketType_schema_1 = require("./ticketType.schema");
const user_schema_1 = require("./user.schema");
const seller_schema_1 = require("./seller.schema");
const common_1 = require("@nestjs/common");
const uuid_random_1 = require("uuid-random");
let Ticket = class Ticket {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'Event' }),
    __metadata("design:type", event_schema_1.Event)
], Ticket.prototype, "eventId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'TicketType' }),
    __metadata("design:type", ticketType_schema_1.TicketType)
], Ticket.prototype, "ticketTypeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'User' }),
    __metadata("design:type", user_schema_1.User)
], Ticket.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: 'Seller' }),
    __metadata("design:type", seller_schema_1.Seller)
], Ticket.prototype, "sellerId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: () => (0, uuid_random_1.default)() }),
    __metadata("design:type", common_1.ParseUUIDPipe)
], Ticket.prototype, "uniqId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: Date,
        default: new Date(),
    }),
    __metadata("design:type", Date)
], Ticket.prototype, "ownAt", void 0);
Ticket = __decorate([
    (0, mongoose_1.Schema)()
], Ticket);
exports.Ticket = Ticket;
exports.TicketSchema = mongoose_1.SchemaFactory.createForClass(Ticket);
//# sourceMappingURL=ticket.schema.js.map
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
exports.SubscribersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../../lib/schemas");
let SubscribersService = class SubscribersService {
    constructor(subscriberModel) {
        this.subscriberModel = subscriberModel;
    }
    async subscribeTo(subscribeTo) {
        const subscription = await this.subscriberModel.create(Object.assign(Object.assign({}, subscribeTo), { subscribedAt: new Date() }));
        if (!subscription)
            throw new common_1.HttpException('SUBSCRIPTION.ERROR.SUBSCRIPTION_FAILED', common_1.HttpStatus.BAD_REQUEST);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Subscription was succesfull!',
        };
    }
    async getOrganisatorSubscription(organisatorID) {
        const subscriptions = await this.subscriberModel.find({ organisatorID });
        if (!subscriptions)
            return { count: 0 };
        return { count: subscriptions.length, subscriptions };
    }
    async unSubscribeTo(unSubscribeTo) {
        const subscription = await this.subscriberModel.remove(Object.assign({}, unSubscribeTo));
        if (!subscription)
            throw new common_1.HttpException('SUBSCRIPTION.ERROR.SUBSCRIPTION_NOT_FOUND', common_1.HttpStatus.NOT_FOUND);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'Unsubscription was successfull!',
        };
    }
};
SubscribersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.Subscriber.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubscribersService);
exports.SubscribersService = SubscribersService;
//# sourceMappingURL=subscribers.service.js.map
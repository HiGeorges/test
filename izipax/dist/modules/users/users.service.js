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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const schemas_1 = require("../../lib/schemas");
const types_1 = require("../../lib/types");
const subscribers_service_1 = require("../subscribers/subscribers.service");
let UsersService = class UsersService {
    constructor(userModel, subscribersService) {
        this.userModel = userModel;
        this.subscribersService = subscribersService;
        this.uniqInput = {
            email: 'USER.ERROR.EMAIL_ALREADY_EXIST',
            username: 'USER.ERROR.USERNAME_ALREADY_EXIST',
            organisationID: 'USER.ERROR.ORGANISATION_ID_ALREADY_EXIST',
            organisationName: 'USER.ERROR.ORGANISATION_NAME_ALREADY_EXIST',
            phoneNumber: 'USER.ERROR.PHONE_NUMBER_ALREADY_EXIST',
            refCode: 'USER.ERROR.REF_CODE_ALREADY_EXIST',
        };
    }
    async create(createUserDto) {
        for (const key in this.uniqInput) {
            const obj = {};
            obj[key] = createUserDto[key];
            if (obj[key] !== undefined && (await this.userModel.exists(obj)) !== null)
                throw new common_1.HttpException(this.uniqInput[key], common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        const user = await this.userModel.create(createUserDto);
        if (!user)
            throw new common_1.HttpException('USER.ERROR.USER_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        else
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'User successfully created!',
                type: user.role,
            };
    }
    async findAll(query) {
        return {
            statusCode: common_1.HttpStatus.OK,
            users: await this.userModel.find(query),
        };
    }
    async findById(id) {
        return {
            statusCode: common_1.HttpStatus.OK,
            user: await this.userModel.findById(id),
        };
    }
    async findOne(query) {
        return await this.userModel.findOne(query);
    }
    async update(id, updateUserDto) {
        await this.userModel.findByIdAndUpdate(id, updateUserDto);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'User successfully updated!',
        };
    }
    async subscribeTo(payload) {
        const organisator = await this.userModel.findById(payload.organisatorID);
        const user = await this.userModel.findById(payload.userID);
        if (organisator && user) {
            return await this.subscribersService.subscribeTo({
                organisatorID: organisator,
                userID: user,
            });
        }
        else
            throw new common_1.HttpException('SUBSCRIPTION.ERROR.SUBSCRIPTION_FAILED', common_1.HttpStatus.BAD_REQUEST);
    }
    async remove(id) {
        await this.userModel.findByIdAndDelete(id);
        return {
            statusCode: common_1.HttpStatus.ACCEPTED,
            message: 'User successfully removed!',
        };
    }
    async IsEVENTMANAGER(id) {
        const user = await this.userModel.findOne({
            _id: id,
            role: types_1.Roles.EVENTMANAGER,
        });
        if (!user)
            return false;
        return true;
    }
    async IsEVENTAGENT(id) {
        const user = await this.userModel.findOne({
            _id: id,
            role: types_1.Roles.EVENTAGENT,
        });
        if (!user)
            return false;
        return true;
    }
    async IsCUSTOMER(id) {
        const user = await this.userModel.findOne({
            _id: id,
            role: types_1.Roles.CUSTOMER,
        });
        if (!user)
            return false;
        return true;
    }
    async IsTICKETSELLER(id) {
        const user = await this.userModel.findOne({
            _id: id,
            role: types_1.Roles.TICKETSELLER,
        });
        if (!user)
            return false;
        return true;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(schemas_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        subscribers_service_1.SubscribersService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
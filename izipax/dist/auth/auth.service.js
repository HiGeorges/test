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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mail_1 = require("../lib/mail");
const timeUuid = require("time-uuid");
const schemas_1 = require("../lib/schemas");
const mongoose_2 = require("@nestjs/mongoose");
const types_1 = require("../lib/types");
const users_service_1 = require("../users/users.service");
const utils_1 = require("../lib/utils");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(usersService, loginModel, jwtService) {
        this.usersService = usersService;
        this.loginModel = loginModel;
        this.jwtService = jwtService;
    }
    async createAccount(payload) {
        if (payload.role === types_1.Roles.CUSTOMER) {
            return await this.usersService.create(Object.assign(Object.assign({}, payload.data), { role: types_1.Roles.CUSTOMER }));
        }
        else if (payload.role === types_1.Roles.EVENTMANAGER) {
            return await this.usersService.create(Object.assign(Object.assign({}, payload.data), { role: types_1.Roles.EVENTMANAGER, organisationID: timeUuid() }));
        }
        else if (payload.role === types_1.Roles.TICKETSELLER) {
            return await this.usersService.create(Object.assign(Object.assign({}, payload.data), { role: types_1.Roles.TICKETSELLER }));
        }
    }
    async login(loginEmailDto) {
        const userFromDb = await this.usersService.findOne({
            email: loginEmailDto.email,
        });
        let isEmailSent = false;
        if (!userFromDb)
            throw new common_1.HttpException('USER.ERROR.USER_NOT_FOUND', common_1.HttpStatus.UNAUTHORIZED);
        const tokenModel = await this.createLoginToken(loginEmailDto.email);
        if (tokenModel && tokenModel.token)
            isEmailSent = await (0, mail_1.default)(loginEmailDto.email, {
                subject: 'Account Verification',
                body: 'This is your code: ' + tokenModel.token,
            });
        else
            throw new common_1.HttpException('LOGIN.ERROR.TOKEN_NOT_CREATED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        if (isEmailSent)
            return {
                message: 'LOGIN.SUCCESS.EMAIL_SUCCESSFULLY_SENT',
                statusCode: common_1.HttpStatus.OK,
            };
        else {
            await tokenModel.delete();
            throw new common_1.InternalServerErrorException('GENERIC.ERROR.MAIL_NOT_SENT');
        }
    }
    async createLoginToken(email) {
        const loginToken = await this.loginModel.findOne({ email });
        console.log(loginToken);
        if (loginToken &&
            (new Date().getTime() - loginToken.timestamp.getTime()) / 60000 < 10) {
            throw new common_1.HttpException('LOGIN.ERROR.EMAIL_SENT_RECENTLY', common_1.HttpStatus.TOO_MANY_REQUESTS);
        }
        return await this.loginModel.findOneAndUpdate({ email }, {
            email,
            token: (0, utils_1.generateOtp)(),
            timestamp: new Date(),
        }, { upsert: true, new: true });
    }
    async getProfile(_id) {
        return await this.usersService.findOne({ _id });
    }
    async verifyLoginToken(verifyPayload) {
        const login = await this.loginModel.findOne({
            email: verifyPayload.email,
            token: verifyPayload.token,
        });
        if (!login)
            throw new common_1.HttpException('LOGIN.ERROR.INVALID_TOKEN', common_1.HttpStatus.UNAUTHORIZED);
        else {
            await login.delete();
            const user = await this.usersService.findOne({ email: login.email });
            if (!user)
                throw new common_1.HttpException('GENERIC.ERROR.LOGIN_USER_STATUS_CHANGE_FAILED', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            else {
                user.status = types_1.UserSTATUS.ACTIVE;
                await user.save();
            }
            return {
                statusCode: common_1.HttpStatus.OK,
                access_token: this.jwtService.sign({
                    _id: user._id,
                    role: user.role,
                }),
            };
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_2.InjectModel)(schemas_1.AuthLogin.name)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
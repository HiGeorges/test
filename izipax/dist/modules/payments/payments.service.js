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
exports.PaymentsService = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let PaymentsService = class PaymentsService {
    constructor(httpService) {
        this.httpService = httpService;
        this.QOS_MTN_REQUEST_PAYMENT_RESPONSE = {
            PENDING: 'PAYMENT.PENDING.WAITING_USER_VALIDATION',
            FAILED: 'PAYMENT.ERROR.PAYMENT_FAILED_OR_TIMEOUT',
            ACCOUNTHOLDER_WITH_FRI_NOT_FOUND: 'PAYMENT.ERROR.ANOTHER_NETWORK_PAYMENT_NUMBER',
            TARGET_AUTHORIZATION_ERROR: 'PAYMENT.ERROR.LOW_BALANCE',
            RESOURCE_NOT_FOUND: 'PAYMENT.ERROR.RESOURCE_NOT_FOUND',
            SUCCESSFUL: 'PAYMENT.SUCCESS.PAYMENT_SUCCESSFUL',
        };
        this.QOS_MTN_REQUEST_PAYMENT_STATUSCODE = {
            PENDING: '01',
            FAILED: '-1',
            ACCOUNTHOLDER_WITH_FRI_NOT_FOUND: '515',
            TARGET_AUTHORIZATION_ERROR: '529',
            RESOURCE_NOT_FOUND: '527',
            SUCCESSFUL: '00',
        };
        this.QOS_MOOV_REQUEST_PAYMENT_RESPONSE = {
            FAILED: 'PAYMENT.ERROR.PAYMENT_FAILED_OR_TIMEOUT',
            INSUFFICIENT_FUND_ERROR: 'PAYMENT.ERROR.LOW_BALANCE',
            SUCCESS: 'PAYMENT.SUCCESS.PAYMENT_SUCCESSFUL',
        };
        this.QOS_MOOV_REQUEST_PAYMENT_STATUSCODE = {
            FAILED: '92',
            INSUFFICIENT_FUND_ERROR: '10',
            SUCCESS: '0',
        };
    }
    async create_payment_mtnbj(payload) {
        const transref = new Date().getTime().toString();
        const { msisdn, amount } = payload;
        const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(process.env.PAYMENT_QOS_MTN_REQUEST_URL, {
            msisdn,
            amount,
            transref,
            clientid: process.env.PAYMENT_QOS_MTN_CLIENT_ID,
        }, {
            headers: {
                Authorization: 'Basic ' + process.env.PAYMENT_QOS_MTN_BEARER_TOKEN,
            },
        }));
        if (data.responsecode === this.QOS_MTN_REQUEST_PAYMENT_STATUSCODE['PENDING']) {
            return {
                status: 201,
                message: this.QOS_MTN_REQUEST_PAYMENT_RESPONSE['PENDING'],
            };
        }
        else if (data.responsecode === this.QOS_MTN_REQUEST_PAYMENT_STATUSCODE['FAILED']) {
            return {
                status: 405,
                message: this.QOS_MTN_REQUEST_PAYMENT_RESPONSE['FAILED'],
            };
        }
        else if (data.responsecode ===
            this.QOS_MTN_REQUEST_PAYMENT_STATUSCODE['ACCOUNTHOLDER_WITH_FRI_NOT_FOUND']) {
            return {
                status: 405,
                message: this.QOS_MTN_REQUEST_PAYMENT_RESPONSE['ACCOUNTHOLDER_WITH_FRI_NOT_FOUND'],
            };
        }
        else if (data.responsecode ===
            this.QOS_MTN_REQUEST_PAYMENT_STATUSCODE['TARGET_AUTHORIZATION_ERROR']) {
            return {
                status: 405,
                message: this.QOS_MTN_REQUEST_PAYMENT_RESPONSE['TARGET_AUTHORIZATION_ERROR'],
            };
        }
        else if (data.responsecode ===
            this.QOS_MTN_REQUEST_PAYMENT_STATUSCODE['RESOURCE_NOT_FOUND']) {
            return {
                status: 405,
                message: this.QOS_MTN_REQUEST_PAYMENT_RESPONSE['RESOURCE_NOT_FOUND'],
            };
        }
        else {
            return {
                status: 201,
                message: 'RESSAYER_LE_PAYEMENT',
            };
        }
    }
    async create_payment_moovbj(payload) {
        const { msisdn, amount } = payload;
        const transref = new Date().getTime().toString();
        if (parseInt(amount) >= 100) {
            const { data } = await (0, rxjs_1.firstValueFrom)(this.httpService.post(process.env.PAYMENT_QOS_MOOV_REQUEST_URL, {
                msisdn,
                amount,
                transref,
                clientid: process.env.PAYMENT_QOS_MOOV_CLIENT_ID,
            }, {
                headers: {
                    Authorization: 'Basic ' + process.env.PAYMENT_QOS_MOOV_BEARER_TOKEN,
                },
            }));
            if (data.responsecode === this.QOS_MOOV_REQUEST_PAYMENT_STATUSCODE['FAILED']) {
                return {
                    status: 405,
                    message: this.QOS_MOOV_REQUEST_PAYMENT_RESPONSE['FAILED'],
                };
            }
            if (data.responsecode ===
                this.QOS_MOOV_REQUEST_PAYMENT_STATUSCODE['INSUFFICIENT_FUND_ERROR']) {
                return {
                    status: 405,
                    message: this.QOS_MOOV_REQUEST_PAYMENT_RESPONSE['INSUFFICIENT_FUND_ERROR'],
                };
            }
            if (data.responsecode ===
                this.QOS_MOOV_REQUEST_PAYMENT_STATUSCODE['SUCCESS']) {
                return {
                    status: 201,
                    message: this.QOS_MOOV_REQUEST_PAYMENT_RESPONSE['SUCCESS'],
                };
            }
        }
        else {
            return {
                status: 404,
                message: 'MONTANT_SUPP_A_100',
                he: console.log(amount),
            };
        }
    }
};
PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], PaymentsService);
exports.PaymentsService = PaymentsService;
//# sourceMappingURL=payments.service.js.map
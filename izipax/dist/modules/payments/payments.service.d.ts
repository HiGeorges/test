import { HttpService } from '@nestjs/axios';
import { PaymentsCreateDto } from 'src/lib/dto/payment.dto';
export declare class PaymentsService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private QOS_MTN_REQUEST_PAYMENT_RESPONSE;
    private QOS_MTN_REQUEST_PAYMENT_STATUSCODE;
    private QOS_MOOV_REQUEST_PAYMENT_RESPONSE;
    private QOS_MOOV_REQUEST_PAYMENT_STATUSCODE;
    create_payment_mtnbj(payload: Required<NonNullable<PaymentsCreateDto>>): Promise<{
        status: number;
        message: string;
    }>;
    create_payment_moovbj(payload: Required<NonNullable<PaymentsCreateDto>>): Promise<{
        status: number;
        message: string;
        he?: undefined;
    } | {
        status: number;
        message: string;
        he: void;
    }>;
}

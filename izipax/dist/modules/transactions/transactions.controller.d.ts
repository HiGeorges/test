import { TransactionCreateDto } from 'src/lib/dto/transaction.dto';
import { PaymentsService } from '../payments/payments.service';
import { TransactionsService } from './transactions.service';
export declare class TransactionsController {
    private readonly transactionsService;
    private readonly paymentService;
    constructor(transactionsService: TransactionsService, paymentService: PaymentsService);
    create(createTransactionDto: TransactionCreateDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    makepayment_mtn(payload: any): Promise<{
        status: number;
        message: string;
    }>;
    makepayment_moov(payload: any): Promise<{
        status: number;
        message: string;
        he?: undefined;
    } | {
        status: number;
        message: string;
        he: void;
    }>;
}

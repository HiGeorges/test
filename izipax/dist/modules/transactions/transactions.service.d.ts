import { HttpService } from '@nestjs/axios';
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { TransactionCreateDto } from 'src/lib/dto/transaction.dto';
import { TransactionDocument } from 'src/lib/entities/transaction.entity';
export declare class TransactionsService {
    private transactionModel;
    private readonly httpService;
    constructor(transactionModel: Model<TransactionDocument>, httpService: HttpService);
    create(payload: Required<NonNullable<TransactionCreateDto>>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}

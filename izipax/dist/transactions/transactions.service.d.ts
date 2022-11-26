import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { TransactionCreateDto, TransactionUpdateDto } from 'src/lib/dto/transaction.dto';
import { TransactionDocument } from 'src/lib/entities/transaction.entity';
export declare class TransactionsService {
    private transactionModel;
    constructor(transactionModel: Model<TransactionDocument>);
    create(payload: Required<NonNullable<TransactionCreateDto>>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    createMtnTransaction(createTransactionDto: TransactionCreateDto): TransactionCreateDto;
    createMoovTransaction(createTransactionDto: TransactionCreateDto): TransactionCreateDto;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTransactionDto: TransactionUpdateDto): TransactionUpdateDto;
}

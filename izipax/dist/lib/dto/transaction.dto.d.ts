import { ITransaction } from '../entities/transaction.entity';
import { IUser } from '../entities/user.entity';
import { TransactionMETHODS, TransactionSTATUS, TransactionTYPES } from '../types';
export declare class TransactionDto implements ITransaction {
    msisdn: string;
    amount: string;
    transref: string;
    type: TransactionTYPES;
    paymentMethod: TransactionMETHODS;
    userId: IUser;
    status: TransactionSTATUS;
}
declare const TransactionCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<TransactionDto, "transref" | "status">>;
export declare class TransactionCreateDto extends TransactionCreateDto_base {
}
export {};

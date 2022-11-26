import mongoose from 'mongoose';
import { ITransaction } from '../entities/transaction.entity';
import { TransactionMETHODS, TransactionSTATUS, TransactionTYPES } from '../types';
import { User } from './user.schema';
export declare class Transaction implements ITransaction {
    msisdn: string;
    amount: string;
    transref: string;
    type: TransactionTYPES;
    paymentMethod: TransactionMETHODS;
    userId: User;
    status: TransactionSTATUS;
}
export declare const TransactionSchema: mongoose.Schema<Transaction, mongoose.Model<Transaction, any, any, any, any>, {}, {}, {}, {}, "type", Transaction>;

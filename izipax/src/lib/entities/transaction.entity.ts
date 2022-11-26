import {
  TransactionMETHODS,
  TransactionSTATUS,
  TransactionTYPES,
} from '../types';
import { IUser } from './user.entity';

export interface ITransaction {
  msisdn: string;
  amount: string;
  transref: string;
  type: TransactionTYPES;
  paymentMethod: TransactionMETHODS;
  userId: IUser;
  status: TransactionSTATUS;
}
export type TransactionDocument = ITransaction & Document;

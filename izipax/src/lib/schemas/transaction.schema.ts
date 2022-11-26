import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ITransaction } from '../entities/transaction.entity';
import {
  TransactionMETHODS,
  TransactionSTATUS,
  TransactionTYPES,
} from '../types';
import { User } from './user.schema';

@Schema()
export class Transaction implements ITransaction {
  @Prop({ required: true })
  msisdn: string;

  @Prop({ required: true })
  amount: string;

  @Prop({
    required: true,
    unique: true,
  })
  transref: string;

  @Prop({ required: true, enum: TransactionTYPES })
  type: TransactionTYPES;

  @Prop({ required: true, enum: TransactionMETHODS })
  paymentMethod: TransactionMETHODS;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ required: true, enum: TransactionSTATUS })
  status: TransactionSTATUS;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

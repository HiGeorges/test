import { OmitType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { ITransaction } from '../entities/transaction.entity';
import { IUser } from '../entities/user.entity';
import {
  TransactionMETHODS,
  TransactionSTATUS,
  TransactionTYPES,
} from '../types';

export class TransactionDto implements ITransaction {
  @IsString()
  @IsNotEmpty()
  msisdn: string;

  @IsString()
  @IsNotEmpty()
  amount: string;

  @IsString()
  @IsNotEmpty()
  transref: string;

  @IsString()
  @IsNotEmpty()
  type: TransactionTYPES;

  @IsString()
  @IsNotEmpty()
  paymentMethod: TransactionMETHODS;

  @IsString()
  @IsNotEmpty()
  userId: IUser;

  @IsString()
  @IsNotEmpty()
  status: TransactionSTATUS;
}

export class TransactionCreateDto extends OmitType(TransactionDto, [
  'transref',
  'status',
] as const) {}

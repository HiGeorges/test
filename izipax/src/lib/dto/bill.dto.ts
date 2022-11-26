import { OmitType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsBoolean,
} from 'class-validator';
import { IBill, IEvent, IUser } from '../entities';

export class BillDto implements IBill {
  @IsString()
  @IsNotEmpty()
  organisatorId: IUser;

  @IsString()
  @IsNotEmpty()
  eventId: IEvent;

  @IsNumber()
  @IsNotEmpty()
  amountDue: number;

  @IsDate()
  @IsString()
  @IsNotEmpty()
  sentAt: Date;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsBoolean()
  @IsNotEmpty()
  paid: boolean;

  @IsDate()
  @IsString()
  @IsNotEmpty()
  paidAt: Date;

  @IsString()
  @IsNotEmpty()
  transactionId: string;
}
export class BillCreateDto extends OmitType(BillDto, [
  'sentAt',
  'paid',
  'paidAt',
  'transactionId',
] as const) {}
export class BillUpdateDto extends OmitType(BillDto, [
  'paidAt',
  'transactionId',
] as const) {}

import { OmitType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';
import { IEvent, IVoucher } from '../entities';

export class VoucherDto implements IVoucher {
  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsNumber()
  @IsNotEmpty()
  reducAmount: number;

  @IsString()
  @IsNotEmpty()
  eventId: IEvent;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;

  @IsNumber()
  @IsNotEmpty()
  times: number;
}
export class VoucherCreateDto extends OmitType(VoucherDto, [
  'code',
  'createdAt',
  'updatedAt',
] as const) {}
export class VoucherUpdateDto extends OmitType(VoucherDto, [
  'code',
  'createdAt',
  'updatedAt',
] as const) {}

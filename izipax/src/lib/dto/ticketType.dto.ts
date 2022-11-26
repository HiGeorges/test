import { OmitType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDate, IsNumber } from 'class-validator';
import { IEvent, ITicketType } from '../entities';

export class TicketTypeDto implements ITicketType {
  @IsString()
  @IsNotEmpty()
  eventId: IEvent;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  validFrom: Date;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  validTo: Date;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
export class TicketTypeCreateDto extends OmitType(TicketTypeDto, [
  'createdAt',
  'updatedAt',
] as const) {}
export class TicketTypeUpdateDto extends OmitType(TicketTypeDto, [
  'eventId',
  'createdAt',
  'updatedAt',
] as const) {}

import { ParseUUIDPipe } from '@nestjs/common';
import { OmitType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDate, IsUUID } from 'class-validator';
import { IEvent, ISeller, ITicket, ITicketType, IUser } from '../entities';

export class TicketDto implements ITicket {
  @IsString()
  @IsNotEmpty()
  eventId: IEvent;

  @IsString()
  @IsNotEmpty()
  ticketTypeId: ITicketType;

  @IsString()
  @IsNotEmpty()
  userId: IUser;

  @IsString()
  @IsNotEmpty()
  sellerId: ISeller;

  @IsUUID()
  @IsString()
  @IsNotEmpty()
  uniqId: ParseUUIDPipe;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  ownAt: Date;
}
export class TicketCreateDto extends OmitType(TicketDto, [
  'ownAt',
  'uniqId',
] as const) {
  'ownAt': Date;
}

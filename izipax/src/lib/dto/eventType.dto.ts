import { OmitType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { IEventType } from '../entities';

export class EventTypeDto implements IEventType {
  @IsString()
  @IsNotEmpty()
  label: string;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
export class EventTypeCreateDto extends OmitType(EventTypeDto, [
  'createdAt',
  'updatedAt',
] as const) {}
export class EventTypeUpdateDto extends OmitType(EventTypeDto, [
  'createdAt',
  'updatedAt',
] as const) {}

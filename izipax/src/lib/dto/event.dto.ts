import { OmitType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsBoolean,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { ICategory, IEvent, IEventType, IUser } from '../entities';
import { EventVisibility } from '../types';

export class EventDto implements IEvent {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  brief: string;

  @IsString()
  @IsNotEmpty()
  cover: string;

  @IsString({ each: true })
  @IsNotEmpty()
  pictures: string[];

  @IsString()
  @IsDate()
  @IsNotEmpty()
  startAt: Date;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  endAt: Date;

  @IsString()
  @IsNotEmpty()
  localisation: string;

  @IsString()
  @IsNotEmpty()
  typeId: IEventType;

  @IsString()
  @IsNotEmpty()
  categoryId: ICategory;

  @IsString()
  @IsNotEmpty()
  subCategoryId: ICategory;

  @IsString({ each: true })
  tags: string[];

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  province: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(EventVisibility)
  visibility: EventVisibility;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  publishedAt: Date;

  @IsNumber()
  @IsNotEmpty()
  totalEarn: number;

  @IsBoolean()
  @IsNotEmpty()
  withSeller: boolean;

  @IsBoolean()
  @IsNotEmpty()
  isFree: boolean;

  @IsBoolean()
  @IsNotEmpty()
  chargeFree: boolean;

  @IsString()
  @IsNotEmpty()
  createdBy: IUser;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  updatedAt: Date;
}
export class EventCreateDto extends OmitType(EventDto, [
  'publishedAt',
  'description',
  'cover',
  'pictures',
  'localisation',
  'address',
  'province',
  'totalEarn',
  'createdAt',
  'updatedAt',
] as const) {}

export class EventUpdateDto extends OmitType(EventDto, [
  'totalEarn',
  'createdAt',
  'updatedAt',
] as const) {}

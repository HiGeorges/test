import { OmitType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDate } from 'class-validator';
import { ISubscriber, IUser } from '../entities';

export class SubscriberDto implements ISubscriber {
  @IsString()
  @IsNotEmpty()
  organisatorID: IUser;

  @IsString()
  @IsNotEmpty()
  userID: IUser;

  @IsDate()
  @IsString()
  @IsNotEmpty()
  subscribedAt: Date;
}

export class SubscribeToDto extends OmitType(SubscriberDto, [
  'subscribedAt',
] as const) {}

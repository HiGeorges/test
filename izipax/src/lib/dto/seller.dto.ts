import { OmitType } from '@nestjs/mapped-types';
import { IsString, IsNotEmpty, IsDate, IsBoolean } from 'class-validator';
import { ISeller, IUser } from '../entities';

export class SellerDto implements ISeller {
  @IsString()
  @IsNotEmpty()
  organisatorId: IUser;

  @IsString()
  @IsNotEmpty()
  sellerId: IUser;

  @IsString()
  @IsDate()
  @IsNotEmpty()
  requestAt: Date;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;
}
export class SellerCreateDto extends OmitType(SellerDto, [
  'requestAt',
  'status',
] as const) {}
export class SellerUpdateDto extends OmitType(SellerDto, [
  'requestAt',
] as const) {}

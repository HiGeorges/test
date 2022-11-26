import { OmitType, PickType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumber,
} from 'class-validator';
import { ILogin } from '../entities';

export class LoginDto implements ILogin {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  token: number;

  @IsDate()
  @IsString()
  @IsNotEmpty()
  timestamp: Date;
}

export class LoginEmailDto extends PickType(LoginDto, ['email'] as const) {}

export class VerifyLoginTokenDto extends OmitType(LoginDto, [
  'timestamp',
] as const) {}

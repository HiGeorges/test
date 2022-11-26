import { OmitType } from '@nestjs/mapped-types';
import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsBoolean,
  IsEmail,
} from 'class-validator';
import { IAgent, IUser } from '../entities';

export class AgentDto implements IAgent {
  @IsString()
  @IsNotEmpty()
  organisatorId: IUser;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  fullname: string;

  @IsBoolean()
  @IsNotEmpty()
  status: boolean;

  @IsDate()
  @IsString()
  @IsNotEmpty()
  joinedAt: Date;

  @IsDate()
  @IsString()
  @IsNotEmpty()
  updatedAt: Date;
}
export class AgentCreateDto extends OmitType(AgentDto, [
  'status',
  'joinedAt',
  'updatedAt',
] as const) {}

export class AgentUpdateDto extends OmitType(AgentDto, [
  'joinedAt',
  'updatedAt',
] as const) {}

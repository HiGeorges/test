import { OmitType } from '@nestjs/mapped-types';
import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsDate,
  IsEnum,
  IsPhoneNumber,
  IsNumber,
  IsArray,
  IsUrl,
} from 'class-validator';
import { IUser } from '../entities';
import { Roles, UserSTATUS } from '../types';

export class UserDto implements IUser {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsString()
  @IsUrl()
  @IsNotEmpty()
  avatar: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsPhoneNumber()
  @IsNotEmpty()
  phoneNumber: string;

  @IsDate()
  birthdate: Date;

  @IsString()
  organisationID: string;

  @IsString()
  organisationName: string;

  @IsNumber()
  balance: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsString()
  refCode: string;

  @IsEnum(UserSTATUS)
  @IsNotEmpty()
  status: UserSTATUS;

  @IsNotEmpty()
  @IsEnum(Roles)
  role: Roles;

  @IsString()
  country: string;

  @IsString()
  city: string;

  @IsString()
  address: string;

  @IsArray({ each: true })
  areasOfInterest: string[];

  @IsString()
  websiteLink: string;

  @IsString()
  facebookLink: string;

  @IsString()
  twitterLink: string;

  @IsString()
  tiktokLink: string;

  @IsString()
  instagramLink: string;

  @IsDate()
  @IsString()
  @IsNotEmpty()
  updatedAt: Date;

  @IsDate()
  @IsString()
  @IsNotEmpty()
  createdAt: Date;
}

export class UpdateUserDto extends OmitType(UserDto, [
  'organisationID',
  'updatedAt',
  'createdAt',
  'role',
  'status',
  'balance',
] as const) {}

export class CreateEventAgentDto extends OmitType(UserDto, [
  'role',
  'city',
  'refCode',
  'address',
  'status',
  'birthdate',
  'avatar',
  'tiktokLink',
  'websiteLink',
  'twitterLink',
  'facebookLink',
  'instagramLink',
  'organisationID',
  'organisationName',

  'createdAt',
  'updatedAt',
] as const) {}

export class CreateCustomerDto extends OmitType(UserDto, [
  'role',
  'city',
  'refCode',
  'address',
  'status',
  'birthdate',
  'avatar',
  'tiktokLink',
  'websiteLink',
  'twitterLink',
  'facebookLink',
  'instagramLink',
  'organisationID',
  'organisationName',

  'createdAt',
  'updatedAt',
] as const) {}

export class CreateOrganisationDto extends OmitType(UserDto, [
  'role',
  'city',
  'refCode',
  'address',
  'status',
  'birthdate',
  'avatar',
  'tiktokLink',
  'websiteLink',
  'twitterLink',
  'facebookLink',
  'instagramLink',
  'organisationID',
  'areasOfInterest',

  'createdAt',
  'updatedAt',
] as const) {}

export class CreateSellerDto extends OmitType(UserDto, [
  'role',
  'city',
  'address',
  'status',
  'birthdate',
  'avatar',
  'tiktokLink',
  'websiteLink',
  'twitterLink',
  'facebookLink',
  'instagramLink',
  'organisationID',
  'organisationName',

  'createdAt',
  'updatedAt',
] as const) {}

export type CreateUserDto = {
  role: Roles;
  data:
    | Required<NonNullable<CreateCustomerDto>>
    | Required<NonNullable<CreateOrganisationDto>>
    | Required<NonNullable<CreateEventAgentDto>>
    | Required<NonNullable<CreateSellerDto>>;
};

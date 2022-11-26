import { IUser } from '../entities';
import { Roles, UserSTATUS } from '../types';
export declare class UserDto implements IUser {
    email: string;
    fullName: string;
    avatar: string;
    username: string;
    phoneNumber: string;
    birthdate: Date;
    organisationID: string;
    organisationName: string;
    balance: number;
    currency: string;
    refCode: string;
    status: UserSTATUS;
    role: Roles;
    country: string;
    city: string;
    address: string;
    areasOfInterest: string[];
    websiteLink: string;
    facebookLink: string;
    twitterLink: string;
    tiktokLink: string;
    instagramLink: string;
    updatedAt: Date;
    createdAt: Date;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Omit<UserDto, "createdAt" | "updatedAt" | "organisationID" | "balance" | "status" | "role">>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
declare const CreateEventAgentDto_base: import("@nestjs/mapped-types").MappedType<Omit<UserDto, "createdAt" | "updatedAt" | "birthdate" | "avatar" | "organisationName" | "organisationID" | "refCode" | "status" | "role" | "city" | "address" | "websiteLink" | "facebookLink" | "twitterLink" | "tiktokLink" | "instagramLink">>;
export declare class CreateEventAgentDto extends CreateEventAgentDto_base {
}
declare const CreateCustomerDto_base: import("@nestjs/mapped-types").MappedType<Omit<UserDto, "createdAt" | "updatedAt" | "birthdate" | "avatar" | "organisationName" | "organisationID" | "refCode" | "status" | "role" | "city" | "address" | "websiteLink" | "facebookLink" | "twitterLink" | "tiktokLink" | "instagramLink">>;
export declare class CreateCustomerDto extends CreateCustomerDto_base {
}
declare const CreateOrganisationDto_base: import("@nestjs/mapped-types").MappedType<Omit<UserDto, "createdAt" | "updatedAt" | "birthdate" | "avatar" | "organisationID" | "refCode" | "status" | "role" | "city" | "address" | "areasOfInterest" | "websiteLink" | "facebookLink" | "twitterLink" | "tiktokLink" | "instagramLink">>;
export declare class CreateOrganisationDto extends CreateOrganisationDto_base {
}
declare const CreateSellerDto_base: import("@nestjs/mapped-types").MappedType<Omit<UserDto, "createdAt" | "updatedAt" | "birthdate" | "avatar" | "organisationName" | "organisationID" | "status" | "role" | "city" | "address" | "websiteLink" | "facebookLink" | "twitterLink" | "tiktokLink" | "instagramLink">>;
export declare class CreateSellerDto extends CreateSellerDto_base {
}
export declare type CreateUserDto = {
    role: Roles;
    data: Required<NonNullable<CreateCustomerDto>> | Required<NonNullable<CreateOrganisationDto>> | Required<NonNullable<CreateEventAgentDto>> | Required<NonNullable<CreateSellerDto>>;
};
export {};

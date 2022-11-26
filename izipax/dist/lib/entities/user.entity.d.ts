import { Roles, UserSTATUS } from '../types';
export interface IUser {
    fullName: string;
    email: string;
    username: string;
    phoneNumber: string;
    birthdate: Date;
    avatar: string;
    organisationName: string;
    organisationID: string;
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
    createdAt: Date;
    updatedAt: Date;
}
export declare type UserDocument = IUser & Document;

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUser } from '../entities';
import { Roles, UserSTATUS } from '../types';

@Schema()
export class User implements IUser {
  @Prop({ required: true })
  fullName: string;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true, unique: true })
  phoneNumber: string;
  @Prop({ default: null })
  birthdate: Date;

  @Prop({ default: null, required: true })
  avatar: string;

  @Prop({ default: null })
  organisationID: string;
  @Prop({ default: null })
  organisationName: string;
  @Prop({ default: 0 })
  balance: number;
  @Prop({ default: 'XOF' })
  currency: string;
  @Prop({ default: null })
  refCode: string;

  @Prop({ default: UserSTATUS.CREATED, enum: UserSTATUS, required: true })
  status: UserSTATUS;
  @Prop({ required: true, enum: Roles })
  role: Roles;

  @Prop({ default: null })
  country: string;
  @Prop({ default: null })
  city: string;
  @Prop({ default: null })
  address: string;

  @Prop({ default: null })
  areasOfInterest: string[];

  @Prop({ default: null })
  websiteLink: string;
  @Prop({ default: null })
  facebookLink: string;
  @Prop({ default: null })
  twitterLink: string;
  @Prop({ default: null })
  tiktokLink: string;
  @Prop({ default: null })
  instagramLink: string;

  @Prop({ default: () => new Date() })
  createdAt: Date;
  @Prop({ default: () => new Date() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);

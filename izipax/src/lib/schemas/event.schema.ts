import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { IEvent } from '../entities';
import { EventType } from './eventType.schema';
import { Category } from './category.schema';
import { User } from './user.schema';
import { EventVisibility } from '../types';

@Schema()
export class Event implements IEvent {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  brief: string;

  @Prop()
  cover: string;

  @Prop()
  pictures: string[];

  @Prop({ required: true })
  startAt: Date;

  @Prop({ required: true })
  endAt: Date;

  @Prop()
  localisation: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'EventType' })
  typeId: EventType;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  categoryId: Category;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  subCategoryId: Category;

  @Prop()
  tags: string[];

  @Prop()
  address: string;

  @Prop()
  city: string;

  @Prop()
  country: string;

  @Prop()
  province: string;

  @Prop({
    required: true,
    enum: EventVisibility,
    default: EventVisibility.PRIVATE,
  })
  visibility: EventVisibility;

  @Prop()
  publishedAt: Date;

  @Prop({ required: true, default: 0 })
  totalEarn: number;

  @Prop({ required: true })
  withSeller: boolean;

  @Prop({ required: true })
  isFree: boolean;

  @Prop({ required: true })
  chargeFree: boolean;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  createdBy: User;

  @Prop({
    type: Date,
    default: new Date(),
  })
  createdAt: Date;

  @Prop({
    type: Date,
    default: new Date(),
  })
  updatedAt: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);

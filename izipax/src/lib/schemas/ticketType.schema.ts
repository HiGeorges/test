import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITicketType } from '../entities';
import { Schema as MongooseSchema } from 'mongoose';
import { Event } from './event.schema';

@Schema()
export class TicketType implements ITicketType {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  eventId: Event;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  validFrom: Date;

  @Prop({ required: true })
  validTo: Date;

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

export const TicketTypeSchema = SchemaFactory.createForClass(TicketType);

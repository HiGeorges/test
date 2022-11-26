import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IBill } from '../entities';
import { Schema as MongooseSchema } from 'mongoose';
import { Event } from './event.schema';
import { User } from './user.schema';

@Schema()
export class Bill implements IBill {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  organisatorId: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  eventId: Event;

  @Prop({ required: true })
  amountDue: number;

  @Prop({ required: true, default: () => new Date() })
  sentAt: Date;

  @Prop({ required: true })
  description: string;

  @Prop()
  paid: boolean;

  @Prop({
    type: Date,
  })
  paidAt: Date;

  @Prop()
  transactionId: string;
}

export const BillSchema = SchemaFactory.createForClass(Bill);

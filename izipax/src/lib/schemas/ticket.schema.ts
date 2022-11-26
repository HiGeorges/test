import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ITicket } from '../entities';
import { Schema as MongooseSchema } from 'mongoose';
import { Event } from './event.schema';
import { TicketType } from './ticketType.schema';
import { User } from './user.schema';
import { Seller } from './seller.schema';
import { ParseUUIDPipe } from '@nestjs/common';
import uuid from 'uuid-random';

@Schema()
export class Ticket implements ITicket {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  eventId: Event;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'TicketType' })
  ticketTypeId: TicketType;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Seller' })
  sellerId: Seller;

  @Prop({ required: true, default: () => uuid() })
  uniqId: ParseUUIDPipe;

  @Prop({
    type: Date,
    default: new Date(),
  })
  ownAt: Date;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IVoucher } from '../entities';
import { Schema as MongooseSchema } from 'mongoose';
import { Event } from './event.schema';

@Schema()
export class Voucher implements IVoucher {
  @Prop({ required: true })
  label: string;

  @Prop({ required: true })
  code: string;

  @Prop({ required: true })
  reducAmount: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  eventId: Event;

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

  @Prop({ default: 0 })
  times: number;
}

export const VoucherSchema = SchemaFactory.createForClass(Voucher);

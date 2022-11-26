import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from '../schemas';
import { ISubscriber } from '../entities';

@Schema()
export class Subscriber implements ISubscriber {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  organisatorID: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  userID: User;

  @Prop({
    type: Date,
  })
  subscribedAt: Date;
}

export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);

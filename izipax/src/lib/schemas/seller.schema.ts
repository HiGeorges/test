import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ISeller } from '../entities';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from './user.schema';

@Schema()
export class Seller implements ISeller {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  organisatorId: User;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  sellerId: User;

  @Prop({
    type: Date,
    default: new Date(),
  })
  requestAt: Date;

  @Prop({
    default: false,
  })
  status: boolean;
}

export const SellerSchema = SchemaFactory.createForClass(Seller);

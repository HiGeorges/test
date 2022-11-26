import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IAgent } from '../entities';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from './user.schema';

@Schema()
export class Agent implements IAgent {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  organisatorId: User;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  fullname: string;

  @Prop({ required: true, default: false })
  status: boolean;

  @Prop({
    type: Date,
    default: new Date(),
  })
  joinedAt: Date;

  @Prop({
    type: Date,
    default: new Date(),
  })
  updatedAt: Date;
}

export const AgentSchema = SchemaFactory.createForClass(Agent);

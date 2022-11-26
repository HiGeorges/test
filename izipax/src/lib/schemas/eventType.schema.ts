import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IEventType } from '../entities';

@Schema()
export class EventType implements IEventType {
  @Prop({ required: true })
  label: string;

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

export const EventTypeSchema = SchemaFactory.createForClass(EventType);

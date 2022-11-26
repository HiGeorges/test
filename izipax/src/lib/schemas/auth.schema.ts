import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ILogin } from '../entities';
@Schema()
export class AuthLogin implements ILogin {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, unique: true })
  token: number;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const AuthLoginSchema = SchemaFactory.createForClass(AuthLogin);

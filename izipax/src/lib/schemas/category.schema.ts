import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { ICategory } from '../entities';

@Schema()
export class Category implements ICategory {
  @Prop({
    unique: true,
    required: true,
  })
  label: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Category' })
  subCategoryOf: Category;

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

export const CategorySchema = SchemaFactory.createForClass(Category);

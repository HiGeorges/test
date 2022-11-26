import { EventVisibility } from '../types';
import { ICategory } from './category.entity';
import { IEventType } from './eventType.entity';
import { IUser } from './user.entity';

export interface IEvent {
  name: string;
  description: string;
  brief: string;
  cover: string;
  pictures: string[];
  startAt: Date;
  endAt: Date;
  localisation: string;
  typeId: IEventType;
  categoryId: ICategory;
  subCategoryId: ICategory;
  tags: string[];
  address: string;
  city: string;
  country: string;
  province: string;
  visibility: EventVisibility;
  publishedAt: Date;
  totalEarn: number;
  withSeller: boolean;
  isFree: boolean;
  chargeFree: boolean;
  createdBy: IUser;
  createdAt: Date;
  updatedAt: Date;
}

export type EventDocument = IEvent & Document;

/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema as MongooseSchema } from 'mongoose';
import { IEvent } from '../entities';
import { EventType } from './eventType.schema';
import { Category } from './category.schema';
import { User } from './user.schema';
import { EventVisibility } from '../types';
export declare class Event implements IEvent {
    name: string;
    description: string;
    brief: string;
    cover: string;
    pictures: string[];
    startAt: Date;
    endAt: Date;
    localisation: string;
    typeId: EventType;
    categoryId: Category;
    subCategoryId: Category;
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
    createdBy: User;
    createdAt: Date;
    updatedAt: Date;
}
export declare const EventSchema: MongooseSchema<Event, import("mongoose").Model<Event, any, any, any, any>, {}, {}, {}, {}, "type", Event>;

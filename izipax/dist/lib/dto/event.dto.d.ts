import { ICategory, IEvent, IEventType, IUser } from '../entities';
import { EventVisibility } from '../types';
export declare class EventDto implements IEvent {
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
declare const EventCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<EventDto, "createdAt" | "updatedAt" | "address" | "description" | "cover" | "pictures" | "localisation" | "province" | "publishedAt" | "totalEarn">>;
export declare class EventCreateDto extends EventCreateDto_base {
}
declare const EventUpdateDto_base: import("@nestjs/mapped-types").MappedType<Omit<EventDto, "createdAt" | "updatedAt" | "totalEarn">>;
export declare class EventUpdateDto extends EventUpdateDto_base {
}
export {};

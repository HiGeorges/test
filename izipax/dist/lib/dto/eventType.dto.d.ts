import { IEventType } from '../entities';
export declare class EventTypeDto implements IEventType {
    label: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const EventTypeCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<EventTypeDto, "createdAt" | "updatedAt">>;
export declare class EventTypeCreateDto extends EventTypeCreateDto_base {
}
declare const EventTypeUpdateDto_base: import("@nestjs/mapped-types").MappedType<Omit<EventTypeDto, "createdAt" | "updatedAt">>;
export declare class EventTypeUpdateDto extends EventTypeUpdateDto_base {
}
export {};

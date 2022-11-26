import { IEvent, ITicketType } from '../entities';
export declare class TicketTypeDto implements ITicketType {
    eventId: IEvent;
    name: string;
    description: string;
    price: number;
    quantity: number;
    validFrom: Date;
    validTo: Date;
    createdAt: Date;
    updatedAt: Date;
}
declare const TicketTypeCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<TicketTypeDto, "createdAt" | "updatedAt">>;
export declare class TicketTypeCreateDto extends TicketTypeCreateDto_base {
}
declare const TicketTypeUpdateDto_base: import("@nestjs/mapped-types").MappedType<Omit<TicketTypeDto, "createdAt" | "updatedAt" | "eventId">>;
export declare class TicketTypeUpdateDto extends TicketTypeUpdateDto_base {
}
export {};

import { ParseUUIDPipe } from '@nestjs/common';
import { IEvent, ISeller, ITicket, ITicketType, IUser } from '../entities';
export declare class TicketDto implements ITicket {
    eventId: IEvent;
    ticketTypeId: ITicketType;
    userId: IUser;
    sellerId: ISeller;
    uniqId: ParseUUIDPipe;
    ownAt: Date;
}
declare const TicketCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<TicketDto, "uniqId" | "ownAt">>;
export declare class TicketCreateDto extends TicketCreateDto_base {
    'ownAt': Date;
}
export {};

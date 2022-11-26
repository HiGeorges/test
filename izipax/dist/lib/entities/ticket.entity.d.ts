import { ParseUUIDPipe } from '@nestjs/common';
import { IEvent } from './event.entity';
import { ISeller } from './seller.entity';
import { ITicketType } from './ticketType.entity';
import { IUser } from './user.entity';
export interface ITicket {
    uniqId: ParseUUIDPipe;
    eventId: IEvent;
    ticketTypeId: ITicketType;
    userId: IUser;
    sellerId: ISeller;
    ownAt: Date;
}
export declare type TicketDocument = ITicket & Document;

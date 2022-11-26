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
import { ITicket } from '../entities';
import { Schema as MongooseSchema } from 'mongoose';
import { Event } from './event.schema';
import { TicketType } from './ticketType.schema';
import { User } from './user.schema';
import { Seller } from './seller.schema';
import { ParseUUIDPipe } from '@nestjs/common';
export declare class Ticket implements ITicket {
    eventId: Event;
    ticketTypeId: TicketType;
    userId: User;
    sellerId: Seller;
    uniqId: ParseUUIDPipe;
    ownAt: Date;
}
export declare const TicketSchema: MongooseSchema<Ticket, import("mongoose").Model<Ticket, any, any, any, any>, {}, {}, {}, {}, "type", Ticket>;

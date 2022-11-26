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
import { HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { EventCreateDto, EventUpdateDto } from 'src/lib/dto';
import { EventDocument } from 'src/lib/entities/event.entity';
import { ParseIdPipe } from 'src/lib/pipes';
export declare class EventsService {
    private EventModel;
    constructor(EventModel: Model<EventDocument>);
    create(payload: Required<NonNullable<EventCreateDto>>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, EventDocument> & import("src/lib/entities/event.entity").IEvent & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: ParseIdPipe): Promise<import("mongoose").Document<unknown, any, EventDocument> & import("src/lib/entities/event.entity").IEvent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: ParseIdPipe, updateEventDto: EventUpdateDto): Promise<import("mongoose").Document<unknown, any, EventDocument> & import("src/lib/entities/event.entity").IEvent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: ParseIdPipe): Promise<import("mongoose").Document<unknown, any, EventDocument> & import("src/lib/entities/event.entity").IEvent & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

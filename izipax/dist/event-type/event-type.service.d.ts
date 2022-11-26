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
import { EventTypeCreateDto, EventTypeUpdateDto } from 'src/lib/dto/eventType.dto';
import { EventTypeDocument } from 'src/lib/entities/eventType.entity';
export declare class EventTypeService {
    private eventTypeModel;
    constructor(eventTypeModel: Model<EventTypeDocument>);
    create(payload: Required<NonNullable<EventTypeCreateDto>>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, EventTypeDocument> & import("src/lib/entities/eventType.entity").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, EventTypeDocument> & import("src/lib/entities/eventType.entity").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, EventTypeDocument>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, EventTypeDocument> & import("src/lib/entities/eventType.entity").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, EventTypeDocument> & import("src/lib/entities/eventType.entity").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, EventTypeDocument>;
    update(id: string, updateEventTypeDto: EventTypeUpdateDto): import("mongoose").Query<import("mongoose").Document<unknown, any, EventTypeDocument> & import("src/lib/entities/eventType.entity").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, EventTypeDocument> & import("src/lib/entities/eventType.entity").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, EventTypeDocument>;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, EventTypeDocument> & import("src/lib/entities/eventType.entity").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, EventTypeDocument> & import("src/lib/entities/eventType.entity").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, EventTypeDocument>;
}

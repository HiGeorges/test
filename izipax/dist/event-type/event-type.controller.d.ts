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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { EventTypeCreateDto, EventTypeUpdateDto } from 'src/lib/dto/eventType.dto';
import { EventTypeService } from './event-type.service';
export declare class EventTypeController {
    private readonly eventTypeService;
    constructor(eventTypeService: EventTypeService);
    create(createEventTypeDto: EventTypeCreateDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").EventTypeDocument>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").EventTypeDocument>;
    update(id: string, updateEventTypeDto: EventTypeUpdateDto): import("mongoose").Query<import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").EventTypeDocument>;
    remove(id: string): import("mongoose").Query<import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").EventTypeDocument>;
}

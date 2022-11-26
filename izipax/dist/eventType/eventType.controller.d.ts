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
import { ParseIdPipe } from 'src/lib/pipes';
import { EventTypeService } from './eventType.service';
export declare class EventTypeController {
    private readonly eventTypeService;
    constructor(eventTypeService: EventTypeService);
    create(createEventTypeDto: EventTypeCreateDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: ParseIdPipe): Promise<import("mongoose").Document<unknown, any, import("../lib/entities").EventTypeDocument> & import("../lib/entities").IEventType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: ParseIdPipe, updateEventTypeDto: EventTypeUpdateDto): {
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    };
    remove(id: ParseIdPipe): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
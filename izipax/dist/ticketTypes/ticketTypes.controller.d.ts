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
import { TicketTypeCreateDto, TicketTypeUpdateDto } from 'src/lib/dto/ticketType.dto';
import { ParseIdPipe } from 'src/lib/pipes';
import { TicketTypesService } from './ticketTypes.service';
export declare class TicketTypesController {
    private readonly ticketTypesService;
    constructor(ticketTypesService: TicketTypesService);
    create(createTicketTypeDto: TicketTypeCreateDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, import("../lib/entities").TicketTypeDocument> & import("../lib/entities").ITicketType & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: ParseIdPipe): Promise<import("mongoose").Document<unknown, any, import("../lib/entities").TicketTypeDocument> & import("../lib/entities").ITicketType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: ParseIdPipe, updateTicketTypeDto: TicketTypeUpdateDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: ParseIdPipe): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}
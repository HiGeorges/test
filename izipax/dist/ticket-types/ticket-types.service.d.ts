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
import { TicketTypeCreateDto, TicketTypeUpdateDto } from 'src/lib/dto/ticketType.dto';
import { TicketTypeDocument } from 'src/lib/entities/ticketType.entity';
export declare class TicketTypesService {
    private readonly ticketTypeModel;
    constructor(ticketTypeModel: Model<TicketTypeDocument>);
    create(payload: Required<NonNullable<TicketTypeCreateDto>>): {
        statusCode: HttpStatus;
        message: string;
    };
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, TicketTypeDocument> & import("src/lib/entities/ticketType.entity").ITicketType & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, TicketTypeDocument> & import("src/lib/entities/ticketType.entity").ITicketType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, TicketTypeDocument>;
    findOne(id: number): import("mongoose").Query<import("mongoose").Document<unknown, any, TicketTypeDocument> & import("src/lib/entities/ticketType.entity").ITicketType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, TicketTypeDocument> & import("src/lib/entities/ticketType.entity").ITicketType & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, TicketTypeDocument>;
    update(id: string, updateTicketTypeDto: TicketTypeUpdateDto): {
        statusCode: HttpStatus;
        message: string;
    };
    remove(id: number): {
        statusCode: HttpStatus;
        message: string;
    };
}

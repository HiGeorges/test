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
import { BillCreateDto, BillUpdateDto } from 'src/lib/dto/bill.dto';
import { BillDocument } from 'src/lib/entities/bill.entity';
import { ParseIdPipe } from 'src/lib/pipes';
export declare class BillsService {
    private billModel;
    constructor(billModel: Model<BillDocument>);
    create(payload: Required<NonNullable<BillCreateDto>>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, BillDocument> & import("src/lib/entities/bill.entity").IBill & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: ParseIdPipe): Promise<import("mongoose").Document<unknown, any, BillDocument> & import("src/lib/entities/bill.entity").IBill & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: ParseIdPipe, updateBillDto: BillUpdateDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: ParseIdPipe): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
}

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
import { VoucherCreateDto, VoucherUpdateDto } from 'src/lib/dto/voucher.dto';
import { VoucherDocument } from 'src/lib/entities/voucher.entity';
import { ParseIdPipe } from 'src/lib/pipes';
export declare class VouchersService {
    private voucherModel;
    constructor(voucherModel: Model<VoucherDocument>);
    create(payload: Required<NonNullable<VoucherCreateDto>>): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, VoucherDocument> & import("src/lib/entities/voucher.entity").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: ParseIdPipe): import("mongoose").Query<import("mongoose").Document<unknown, any, VoucherDocument> & import("src/lib/entities/voucher.entity").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, VoucherDocument> & import("src/lib/entities/voucher.entity").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, VoucherDocument>;
    update(id: ParseIdPipe, updateVoucherDto: VoucherUpdateDto): import("mongoose").Query<import("mongoose").Document<unknown, any, VoucherDocument> & import("src/lib/entities/voucher.entity").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, VoucherDocument> & import("src/lib/entities/voucher.entity").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, VoucherDocument>;
    remove(id: ParseIdPipe): import("mongoose").Query<import("mongoose").Document<unknown, any, VoucherDocument> & import("src/lib/entities/voucher.entity").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, VoucherDocument> & import("src/lib/entities/voucher.entity").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, VoucherDocument>;
}
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
import { VoucherCreateDto, VoucherUpdateDto } from 'src/lib/dto/voucher.dto';
import { ParseIdPipe } from 'src/lib/pipes';
import { VouchersService } from './vouchers.service';
export declare class VouchersController {
    private readonly vouchersService;
    constructor(vouchersService: VouchersService);
    create(createVoucherDto: VoucherCreateDto): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, any, import("../lib/entities").VoucherDocument> & import("../lib/entities").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    findOne(id: ParseIdPipe): import("mongoose").Query<import("mongoose").Document<unknown, any, import("../lib/entities").VoucherDocument> & import("../lib/entities").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("../lib/entities").VoucherDocument> & import("../lib/entities").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").VoucherDocument>;
    update(id: ParseIdPipe, updateVoucherDto: VoucherUpdateDto): import("mongoose").Query<import("mongoose").Document<unknown, any, import("../lib/entities").VoucherDocument> & import("../lib/entities").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("../lib/entities").VoucherDocument> & import("../lib/entities").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").VoucherDocument>;
    remove(id: ParseIdPipe): import("mongoose").Query<import("mongoose").Document<unknown, any, import("../lib/entities").VoucherDocument> & import("../lib/entities").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, any, import("../lib/entities").VoucherDocument> & import("../lib/entities").IVoucher & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../lib/entities").VoucherDocument>;
}

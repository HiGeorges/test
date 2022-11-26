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
import { FilterQuery } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from 'src/lib/dto';
import { UserDocument } from 'src/lib/entities';
import { ParseIdPipe } from 'src/lib/pipes';
import { Roles } from 'src/lib/types';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: Required<CreateUserDto>): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        type: Roles;
    }>;
    findAll(query: FilterQuery<UserDocument>): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        users: (import("mongoose").Document<unknown, any, UserDocument> & import("src/lib/entities").IUser & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: ParseIdPipe): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        user: import("mongoose").Document<unknown, any, UserDocument> & import("src/lib/entities").IUser & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    update(id: ParseIdPipe, updateUserDto: Required<UpdateUserDto>): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
    remove(id: ParseIdPipe): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
    }>;
}

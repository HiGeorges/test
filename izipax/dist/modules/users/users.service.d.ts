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
import { FilterQuery, Model } from 'mongoose';
import { SubscribeToDto, UpdateUserDto, UserDto } from 'src/lib/dto';
import { UserDocument } from 'src/lib/entities';
import { ParseIdPipe } from 'src/lib/pipes';
import { User } from 'src/lib/schemas';
import { Roles } from 'src/lib/types';
import { SubscribersService } from '../subscribers/subscribers.service';
export declare class UsersService {
    private readonly userModel;
    private subscribersService;
    constructor(userModel: Model<UserDocument>, subscribersService: SubscribersService);
    private uniqInput;
    create(createUserDto: Partial<UserDto>): Promise<{
        statusCode: HttpStatus;
        message: string;
        type: Roles;
    }>;
    findAll(query: FilterQuery<UserDocument>): Promise<{
        statusCode: HttpStatus;
        users: (import("mongoose").Document<unknown, any, UserDocument> & import("src/lib/entities").IUser & Document & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findById(id: ParseIdPipe): Promise<{
        statusCode: HttpStatus;
        user: import("mongoose").Document<unknown, any, UserDocument> & import("src/lib/entities").IUser & Document & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    findOne(query: FilterQuery<User>): Promise<import("mongoose").Document<unknown, any, UserDocument> & import("src/lib/entities").IUser & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: ParseIdPipe, updateUserDto: UpdateUserDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    subscribeTo(payload: SubscribeToDto): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    remove(id: ParseIdPipe): Promise<{
        statusCode: HttpStatus;
        message: string;
    }>;
    IsEVENTMANAGER(id: ParseIdPipe): Promise<boolean>;
    IsEVENTAGENT(id: ParseIdPipe): Promise<boolean>;
    IsCUSTOMER(id: ParseIdPipe): Promise<boolean>;
    IsTICKETSELLER(id: ParseIdPipe): Promise<boolean>;
}

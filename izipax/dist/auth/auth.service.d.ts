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
import { CreateUserDto } from 'src/lib/dto';
import { LoginDocument } from 'src/lib/entities';
import { Roles } from 'src/lib/types';
import { UsersService } from 'src/users/users.service';
import { LoginEmailDto, VerifyLoginTokenDto } from 'src/lib/dto/auth.dto';
import { ParseIdPipe } from 'src/lib/pipes';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private readonly loginModel;
    private jwtService;
    constructor(usersService: UsersService, loginModel: Model<LoginDocument>, jwtService: JwtService);
    createAccount(payload: Required<NonNullable<CreateUserDto>>): Promise<{
        statusCode: HttpStatus;
        message: string;
        type: Roles;
    }>;
    login(loginEmailDto: Required<LoginEmailDto>): Promise<{
        message: string;
        statusCode: HttpStatus;
    }>;
    createLoginToken(email: string): Promise<import("mongoose").Document<unknown, any, LoginDocument> & import("src/lib/entities").ILogin & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getProfile(_id: ParseIdPipe): Promise<import("mongoose").Document<unknown, any, import("src/lib/entities").UserDocument> & import("src/lib/entities").IUser & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    verifyLoginToken(verifyPayload: Required<VerifyLoginTokenDto>): Promise<{
        statusCode: HttpStatus;
        access_token: string;
    }>;
}

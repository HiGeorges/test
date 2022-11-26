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
import { CreateUserDto } from 'src/lib/dto';
import { LoginEmailDto, VerifyLoginTokenDto } from 'src/lib/dto/auth.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(createUserDto: Required<CreateUserDto>): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        message: string;
        type: import("../lib/types").Roles;
    }>;
    login(loginEmailDto: Required<LoginEmailDto>): Promise<{
        message: string;
        statusCode: import("@nestjs/common").HttpStatus;
    }>;
    verifyLogin(verifyLoginTokenDto: Required<VerifyLoginTokenDto>): Promise<{
        statusCode: import("@nestjs/common").HttpStatus;
        access_token: string;
    }>;
    getProfile(req: any): Promise<import("mongoose").Document<unknown, any, import("../lib/entities").UserDocument> & import("../lib/entities").IUser & Document & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}

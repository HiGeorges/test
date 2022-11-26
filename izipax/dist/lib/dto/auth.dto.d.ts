import { ILogin } from '../entities';
export declare class LoginDto implements ILogin {
    email: string;
    token: number;
    timestamp: Date;
}
declare const LoginEmailDto_base: import("@nestjs/mapped-types").MappedType<Pick<LoginDto, "email">>;
export declare class LoginEmailDto extends LoginEmailDto_base {
}
declare const VerifyLoginTokenDto_base: import("@nestjs/mapped-types").MappedType<Omit<LoginDto, "timestamp">>;
export declare class VerifyLoginTokenDto extends VerifyLoginTokenDto_base {
}
export {};

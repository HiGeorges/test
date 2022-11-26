import { IUser } from '../entities/user.entity';
export declare class PaymentsDto {
    msisdn: string;
    amount: string;
    transref: string;
    userId: IUser;
}
declare const PaymentsCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<PaymentsDto, "transref">>;
export declare class PaymentsCreateDto extends PaymentsCreateDto_base {
}
export {};

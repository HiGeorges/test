import { IEvent, IVoucher } from '../entities';
export declare class VoucherDto implements IVoucher {
    label: string;
    code: string;
    reducAmount: number;
    eventId: IEvent;
    createdAt: Date;
    updatedAt: Date;
    times: number;
}
declare const VoucherCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<VoucherDto, "createdAt" | "updatedAt" | "code">>;
export declare class VoucherCreateDto extends VoucherCreateDto_base {
}
declare const VoucherUpdateDto_base: import("@nestjs/mapped-types").MappedType<Omit<VoucherDto, "createdAt" | "updatedAt" | "code">>;
export declare class VoucherUpdateDto extends VoucherUpdateDto_base {
}
export {};

import { IBill, IEvent, IUser } from '../entities';
export declare class BillDto implements IBill {
    organisatorId: IUser;
    eventId: IEvent;
    amountDue: number;
    sentAt: Date;
    description: string;
    paid: boolean;
    paidAt: Date;
    transactionId: string;
}
declare const BillCreateDto_base: import("@nestjs/mapped-types").MappedType<Omit<BillDto, "sentAt" | "paid" | "paidAt" | "transactionId">>;
export declare class BillCreateDto extends BillCreateDto_base {
}
declare const BillUpdateDto_base: import("@nestjs/mapped-types").MappedType<Omit<BillDto, "paidAt" | "transactionId">>;
export declare class BillUpdateDto extends BillUpdateDto_base {
}
export {};
